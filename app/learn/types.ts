export interface PostMeta {
  slug: string;
  title: string;
  dek?: string;
  date: string;
  youtube_id?: string;
  read_minutes?: number;
  tags?: string[];
  published?: boolean;
}

export interface LearnPost {
  meta: PostMeta;
  Component: React.ComponentType;
}



