export interface IArticles {
  id: number;
  title: string;
  url: string;
  image_url: string;
  newsSite: string;
  summary: string;
  publishedAt: Date;
  updatedAt: Date;
  featured: boolean;
  launches: any[];
  events: any[];
}
