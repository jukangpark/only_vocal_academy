import { supabase } from "./auth";

export interface Notice {
  id: number;
  title: string;
  date: string;
  category: string;
  content: string;
  author: string;
  status: string;
  views: number;
  priority: string;
  created_at?: string;
  updated_at?: string;
}

export interface CreateNoticeData {
  title: string;
  date: string;
  category: string;
  content: string;
  author: string;
  status?: string;
  priority?: string;
}

export interface UpdateNoticeData {
  title?: string;
  date?: string;
  category?: string;
  content?: string;
  author?: string;
  status?: string;
  priority?: string;
}

// 모든 공지사항 조회 (관리자용)
export async function getAllNotices(): Promise<Notice[]> {
  const { data, error } = await supabase
    .from("notices")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    throw new Error(`공지사항 조회 실패: ${error.message}`);
  }

  return data || [];
}

// 공개된 공지사항만 조회 (일반 사용자용)
export async function getPublicNotices(): Promise<Notice[]> {
  try {
    const { data, error } = await supabase
      .from("notices")
      .select("*")
      .eq("status", "공개")
      .order("created_at", { ascending: false });

    if (error) {
      console.error("❌ Supabase 에러:", error);
      throw new Error(`공지사항 조회 실패: ${error.message}`);
    }

    return data || [];
  } catch (error) {
    console.error("💥 getPublicNotices 예외 발생:", error);
    throw error;
  }
}

// 특정 공지사항 조회
export async function getNoticeById(id: number): Promise<Notice | null> {
  try {
    const { data, error } = await supabase
      .from("notices")
      .select("*")
      .eq("id", id)
      .single();

    if (error) {
      console.error("❌ Supabase 에러:", error);
      if (error.code === "PGRST116") {
        return null; // 공지사항이 존재하지 않음
      }
      throw new Error(`공지사항 조회 실패: ${error.message}`);
    }

    return data;
  } catch (error) {
    console.error("💥 getNoticeById 예외 발생:", error);
    throw error;
  }
}

// 공지사항 생성
export async function createNotice(
  noticeData: CreateNoticeData
): Promise<Notice> {
  const { data, error } = await supabase
    .from("notices")
    .insert([
      {
        title: noticeData.title,
        date: noticeData.date,
        category: noticeData.category,
        content: noticeData.content,
        author: noticeData.author,
        status: noticeData.status || "공개",
        priority: noticeData.priority || "보통",
      },
    ])
    .select()
    .single();

  if (error) {
    throw new Error(`공지사항 생성 실패: ${error.message}`);
  }

  return data;
}

// 공지사항 수정
export async function updateNotice(
  id: number,
  noticeData: UpdateNoticeData
): Promise<Notice> {
  const { data, error } = await supabase
    .from("notices")
    .update(noticeData)
    .eq("id", id)
    .select()
    .single();

  if (error) {
    throw new Error(`공지사항 수정 실패: ${error.message}`);
  }

  return data;
}

// 공지사항 삭제
export async function deleteNotice(id: number): Promise<void> {
  const { error } = await supabase.from("notices").delete().eq("id", id);

  if (error) {
    throw new Error(`공지사항 삭제 실패: ${error.message}`);
  }
}

// 조회수 증가
export async function incrementViews(id: number): Promise<void> {
  try {
    // 먼저 현재 조회수를 가져옴
    const { data: currentNotice, error: fetchError } = await supabase
      .from("notices")
      .select("views")
      .eq("id", id)
      .single();

    if (fetchError) {
      console.error("❌ 현재 조회수 조회 실패:", fetchError);
      return;
    }

    const currentViews = currentNotice?.views || 0;
    const newViews = currentViews + 1;

    // 조회수 증가
    const { error: updateError } = await supabase
      .from("notices")
      .update({ views: newViews })
      .eq("id", id);

    if (updateError) {
      console.error("❌ 조회수 증가 실패:", updateError);
    } else {
      console.log("✅ 조회수 증가 성공");
    }
  } catch (error) {
    console.error("💥 incrementViews 예외 발생:", error);
  }
}

// 공지사항 검색
export async function searchNotices(
  query: string,
  filters?: {
    status?: string;
    category?: string;
    priority?: string;
  }
): Promise<Notice[]> {
  let supabaseQuery = supabase.from("notices").select("*");

  // 검색어가 있는 경우
  if (query.trim()) {
    supabaseQuery = supabaseQuery.or(
      `title.ilike.%${query}%,content.ilike.%${query}%,author.ilike.%${query}%`
    );
  }

  // 필터 적용
  if (filters?.status) {
    supabaseQuery = supabaseQuery.eq("status", filters.status);
  }
  if (filters?.category) {
    supabaseQuery = supabaseQuery.eq("category", filters.category);
  }
  if (filters?.priority) {
    supabaseQuery = supabaseQuery.eq("priority", filters.priority);
  }

  const { data, error } = await supabaseQuery.order("created_at", {
    ascending: false,
  });

  if (error) {
    throw new Error(`공지사항 검색 실패: ${error.message}`);
  }

  return data || [];
}

// 통계 정보 조회
export async function getNoticeStats(): Promise<{
  total: number;
  published: number;
  draft: number;
  thisMonth: number;
  totalViews: number;
}> {
  const { data: notices, error } = await supabase
    .from("notices")
    .select("status, views, created_at");

  if (error) {
    throw new Error(`통계 조회 실패: ${error.message}`);
  }

  const now = new Date();
  const thisMonth =
    notices?.filter((notice) => {
      const noticeDate = new Date(notice.created_at);
      return (
        noticeDate.getMonth() === now.getMonth() &&
        noticeDate.getFullYear() === now.getFullYear()
      );
    }).length || 0;

  const total = notices?.length || 0;
  const published = notices?.filter((n) => n.status === "공개").length || 0;
  const draft = notices?.filter((n) => n.status === "임시저장").length || 0;
  const totalViews =
    notices?.reduce((sum, notice) => sum + (notice.views || 0), 0) || 0;

  return {
    total,
    published,
    draft,
    thisMonth,
    totalViews,
  };
}
