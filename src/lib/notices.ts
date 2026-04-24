import noticesData from "../../public/notices.json";

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
  tags: string;
  created_at: string;
  updated_at: string;
}

export function getPublicNotices(): Notice[] {
  return noticesData as Notice[];
}

export function getNoticeById(id: number): Notice | undefined {
  return (noticesData as Notice[]).find((notice) => notice.id === id);
}
