export interface Article {
  id: string;
  name: string;
  content: string;
  public: string;
  created_at: string;
  updated_at: string;
  featured_image: string;
  visibility: boolean;
  author: {
    id: string;
    name: string;
  };
  category: {
    id: string;
    name: string;
  };
  tags: string[];
  slug: string;
  meta_title: string;
  meta_description: string;
  read: number;
  like_count: number;
}

export interface Category {
  id: string;
  name: string;
  content: string;
  featuredImage: string;
  visibility: boolean;
  tag: string[];
  slug: string;
  public: string;
  createdAt: string;
  updatedAt: string;
}
