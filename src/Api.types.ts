export interface UnsplashResult {
  id: string;
  description: string;
  alt_description?: string;
  created_at: string;
  likes: number;
  urls: {
    full: string;
    regular: string;
    small: string;
  };
  user: {
    name: string;
  };
}

export interface UnsplashResponse {
  results: UnsplashResult[];
  total: number;
  total_pages: number;
}
