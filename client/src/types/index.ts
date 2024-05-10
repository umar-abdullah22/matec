export interface Image {
    id: string;
    filename: string;
    url: string;
  }
  
  export interface ImageState {
    images: Image[];
    fetchImages: (page?: number, limit?: number) => Promise<void>;
    addImage: (newImage: FormData) => Promise<void>;
    deleteImage: (id: string) => Promise<void>;
    page: number;
    hasMore: boolean,
  }
  