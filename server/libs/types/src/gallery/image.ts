
export interface Image {
    id?: string;
    filename: string;
    url: string;
}
  
export interface CustomResponse {
  images: Image[],
  message: string
}