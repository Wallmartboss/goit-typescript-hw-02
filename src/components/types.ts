// Визначення типа для пропсів item
export interface ImageItem {
  id: string;
  alt_description: string;
  urls: {
    small: string;
    regular: string;
    large: string;
  };
}

export interface ApiResponse {
  results: ImageItem[];
  total_pages: number;
}
