import { supabase } from "./supabase";

// 갤러리 포스트 타입 정의
export interface GalleryPost {
  id: number;
  title: string;
  content: string;
  status: "published" | "draft" | "archived";
  views: number;
  author_id: string;
  created_at: string;
  updated_at: string;
  published_at?: string;
  media?: GalleryMedia[];
  likes_count?: number;
  comments_count?: number;
}

export interface GalleryMedia {
  id: number;
  post_id: number;
  file_name: string;
  file_path: string;
  file_type: "image" | "video";
  file_size: number;
  mime_type: string;
  alt_text?: string;
  sort_order: number;
  created_at: string;
}

export interface CreateGalleryPostData {
  title: string;
  content: string;
  status: "published" | "draft";
  mediaFiles: File[];
}

export interface UpdateGalleryPostData {
  title?: string;
  content?: string;
  status?: "published" | "draft" | "archived";
  mediaFiles?: File[];
}

// 갤러리 포스트 목록 조회
export async function getGalleryPosts(): Promise<GalleryPost[]> {
  try {
    // 현재 사용자 정보 확인
    const {
      data: { user },
      error: userError,
    } = await supabase.auth.getUser();
    if (userError || !user) {
      throw new Error("인증되지 않은 사용자입니다.");
    }

    // 관리자이거나 갤러리 접근 권한이 있는 사용자만 조회 가능
    const isAdmin = user.id === "74a61bfb-5163-4da6-a823-2409b3f862ac";
    const hasGalleryAccess = user.user_metadata?.gallery_access === true;

    if (!isAdmin && !hasGalleryAccess) {
      throw new Error("갤러리 접근 권한이 없습니다. 관리자에게 문의해주세요.");
    }

    const { data, error } = await supabase
      .from("gallery_posts")
      .select(
        `
        *,
        media:gallery_media(*)
      `
      )
      .order("created_at", { ascending: false });

    if (error) {
      throw new Error(error.message);
    }

    return data || [];
  } catch (error) {
    console.error("갤러리 포스트 조회 실패:", error);
    throw error;
  }
}

// 특정 갤러리 포스트 조회
export async function getGalleryPostById(
  id: number
): Promise<GalleryPost | null> {
  try {
    // 현재 사용자 정보 확인
    const {
      data: { user },
      error: userError,
    } = await supabase.auth.getUser();
    if (userError || !user) {
      throw new Error("인증되지 않은 사용자입니다.");
    }

    // 관리자이거나 갤러리 접근 권한이 있는 사용자만 조회 가능
    const isAdmin = user.id === "74a61bfb-5163-4da6-a823-2409b3f862ac";
    const hasGalleryAccess = user.user_metadata?.gallery_access === true;

    if (!isAdmin && !hasGalleryAccess) {
      throw new Error("갤러리 접근 권한이 없습니다.");
    }

    const { data, error } = await supabase
      .from("gallery_posts")
      .select(
        `
        *,
        media:gallery_media(*)
      `
      )
      .eq("id", id)
      .single();

    if (error) {
      if (error.code === "PGRST116") {
        return null; // 포스트가 없는 경우
      }
      throw new Error(error.message);
    }

    return data;
  } catch (error) {
    console.error("갤러리 포스트 조회 실패:", error);
    throw error;
  }
}

// 갤러리 포스트 생성
export async function createGalleryPost(
  postData: CreateGalleryPostData
): Promise<GalleryPost> {
  try {
    // 현재 사용자 정보 가져오기
    const {
      data: { user },
      error: userError,
    } = await supabase.auth.getUser();
    if (userError || !user) {
      throw new Error("인증되지 않은 사용자입니다.");
    }

    // 관리자만 포스트 생성 가능
    if (user.id !== "74a61bfb-5163-4da6-a823-2409b3f862ac") {
      throw new Error("갤러리 포스트 생성 권한이 없습니다.");
    }

    // 포스트 생성
    const { data: post, error: postError } = await supabase
      .from("gallery_posts")
      .insert({
        title: postData.title,
        content: postData.content,
        status: postData.status,
        author_id: user.id,
        published_at:
          postData.status === "published" ? new Date().toISOString() : null,
      })
      .select()
      .single();

    if (postError) {
      throw new Error(postError.message);
    }

    // 미디어 파일 업로드
    if (postData.mediaFiles.length > 0) {
      const mediaPromises = postData.mediaFiles.map(async (file, index) => {
        const fileExt = file.name.split(".").pop();
        const fileName = `${Date.now()}-${index}.${fileExt}`;
        const filePath = `gallery/${post.id}/${fileName}`;

        // Supabase Storage에 파일 업로드
        const { error: uploadError } = await supabase.storage
          .from("gallery-media")
          .upload(filePath, file);

        if (uploadError) {
          throw new Error(`파일 업로드 실패: ${uploadError.message}`);
        }

        // 미디어 정보를 데이터베이스에 저장
        const { error: mediaError } = await supabase
          .from("gallery_media")
          .insert({
            post_id: post.id,
            file_name: file.name,
            file_path: filePath,
            file_type: file.type.startsWith("image/") ? "image" : "video",
            file_size: file.size,
            mime_type: file.type,
            sort_order: index,
          });

        if (mediaError) {
          throw new Error(`미디어 정보 저장 실패: ${mediaError.message}`);
        }
      });

      await Promise.all(mediaPromises);
    }

    // 생성된 포스트와 미디어 정보를 다시 조회
    const createdPost = await getGalleryPostById(post.id);
    if (!createdPost) {
      throw new Error("포스트 생성 후 조회에 실패했습니다.");
    }

    return createdPost;
  } catch (error) {
    console.error("갤러리 포스트 생성 실패:", error);
    throw error;
  }
}

// 갤러리 포스트 수정
export async function updateGalleryPost(
  id: number,
  postData: UpdateGalleryPostData
): Promise<GalleryPost> {
  try {
    // 현재 사용자 정보 확인
    const {
      data: { user },
      error: userError,
    } = await supabase.auth.getUser();
    if (userError || !user) {
      throw new Error("인증되지 않은 사용자입니다.");
    }

    // 관리자만 포스트 수정 가능
    if (user.id !== "74a61bfb-5163-4da6-a823-2409b3f862ac") {
      throw new Error("갤러리 포스트 수정 권한이 없습니다.");
    }

    const updateData: any = {
      ...postData,
      updated_at: new Date().toISOString(),
    };

    // mediaFiles 제거 (별도 처리)
    delete updateData.mediaFiles;

    // 발행 상태로 변경하는 경우 published_at 설정
    if (postData.status === "published") {
      updateData.published_at = new Date().toISOString();
    }

    // 포스트 기본 정보 업데이트
    const { data, error } = await supabase
      .from("gallery_posts")
      .update(updateData)
      .eq("id", id)
      .select()
      .single();

    if (error) {
      throw new Error(error.message);
    }

    // 새 미디어 파일이 있는 경우 업로드
    if (postData.mediaFiles && postData.mediaFiles.length > 0) {
      const uploadedMedia = [];

      for (let i = 0; i < postData.mediaFiles.length; i++) {
        const file = postData.mediaFiles[i];
        const fileExt = file.name.split(".").pop();
        const fileName = `${Date.now()}-${Math.random()
          .toString(36)
          .substring(2)}.${fileExt}`;
        const filePath = `posts/${id}/${fileName}`;

        // Supabase Storage에 파일 업로드
        const { error: uploadError } = await supabase.storage
          .from("gallery-media")
          .upload(filePath, file);

        if (uploadError) {
          throw new Error(`파일 업로드 실패: ${uploadError.message}`);
        }

        // 미디어 정보를 데이터베이스에 저장
        const mediaData = {
          post_id: id,
          file_name: file.name,
          file_path: filePath,
          file_type: file.type.startsWith("image/") ? "image" : "video",
          file_size: file.size,
          mime_type: file.type,
          sort_order: i + 1,
        };

        const { data: mediaRecord, error: mediaError } = await supabase
          .from("gallery_media")
          .insert(mediaData)
          .select()
          .single();

        if (mediaError) {
          throw new Error(`미디어 저장 실패: ${mediaError.message}`);
        }

        uploadedMedia.push(mediaRecord);
      }
    }

    // 업데이트된 포스트와 미디어 정보를 함께 반환
    const { data: updatedPost, error: fetchError } = await supabase
      .from("gallery_posts")
      .select(`*, media:gallery_media(*)`)
      .eq("id", id)
      .single();

    if (fetchError) {
      throw new Error(fetchError.message);
    }

    return updatedPost;
  } catch (error) {
    console.error("갤러리 포스트 수정 실패:", error);
    throw error;
  }
}

// 갤러리 포스트 삭제
export async function deleteGalleryPost(id: number): Promise<void> {
  try {
    // 현재 사용자 정보 확인
    const {
      data: { user },
      error: userError,
    } = await supabase.auth.getUser();
    if (userError || !user) {
      throw new Error("인증되지 않은 사용자입니다.");
    }

    // 관리자만 포스트 삭제 가능
    if (user.id !== "74a61bfb-5163-4da6-a823-2409b3f862ac") {
      throw new Error("갤러리 포스트 삭제 권한이 없습니다.");
    }

    // 먼저 관련된 미디어 파일들을 Storage에서 삭제
    const { data: mediaFiles } = await supabase
      .from("gallery_media")
      .select("file_path")
      .eq("post_id", id);

    if (mediaFiles && mediaFiles.length > 0) {
      const filePaths = mediaFiles.map((media) => media.file_path);
      const { error: storageError } = await supabase.storage
        .from("gallery-media")
        .remove(filePaths);

      if (storageError) {
        console.warn("미디어 파일 삭제 실패:", storageError.message);
      }
    }

    // 포스트 삭제 (CASCADE로 관련 미디어도 함께 삭제됨)
    const { error } = await supabase
      .from("gallery_posts")
      .delete()
      .eq("id", id);

    if (error) {
      throw new Error(error.message);
    }
  } catch (error) {
    console.error("갤러리 포스트 삭제 실패:", error);
    throw error;
  }
}

// 갤러리 포스트 조회수 증가
export async function incrementPostViews(id: number): Promise<void> {
  try {
    // 현재 조회수를 가져와서 1 증가시키는 방식
    const { data: currentPost, error: fetchError } = await supabase
      .from("gallery_posts")
      .select("views")
      .eq("id", id)
      .single();

    if (fetchError) {
      throw new Error(fetchError.message);
    }

    const newViews = (currentPost.views || 0) + 1;

    const { error: updateError } = await supabase
      .from("gallery_posts")
      .update({ views: newViews })
      .eq("id", id);

    if (updateError) {
      throw new Error(updateError.message);
    }
  } catch (error) {
    console.error("조회수 증가 실패:", error);
    throw error;
  }
}

// 갤러리 통계 조회
export async function getGalleryStats() {
  try {
    const { data, error } = await supabase
      .from("gallery_stats")
      .select("*")
      .single();

    if (error) {
      throw new Error(error.message);
    }

    return data;
  } catch (error) {
    console.error("갤러리 통계 조회 실패:", error);
    throw error;
  }
}

// 미디어 파일 URL 생성
export function getMediaUrl(filePath: string): string {
  const { data } = supabase.storage
    .from("gallery-media")
    .getPublicUrl(filePath);

  return data.publicUrl;
}
