
export interface Image {
    id?: string;
    filename: string;
    url: string;
}
  
export interface CustomResponse {
  message: string
}

export interface PaginatedResponse {
  images: Image[],
  hasMore: boolean
}