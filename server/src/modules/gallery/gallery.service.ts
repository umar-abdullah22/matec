import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { CustomResponse, Image } from '@lib/types/gallery';
import { ImageProcessingService, MemoryStorageService } from '@lib/utils';
import { ErrorMessageEnums, SuccessMessageEnums } from 'src/enums/image';

/**
 * Service to manage gallery operations.
 */
@Injectable()
export class GalleryService {
  constructor(
    private storageService: MemoryStorageService,
    private imageProcessingService: ImageProcessingService
  ) {}

  /**
   * Creates and stores a new image after processing.
   * @param file - The image file uploaded.
   * @returns The saved image data.
   */
  async create(file: Express.Multer.File): Promise<CustomResponse> {
    if (!file.mimetype.startsWith('image/')) {
      throw new HttpException(ErrorMessageEnums.FILE_TYPE, HttpStatus.BAD_REQUEST);
    }

    const compressedImageBuffer = await this.imageProcessingService.compressImage(file.buffer);
    const image: Image = {
      filename: file.originalname,
      url: compressedImageBuffer.toString('base64'),
    };
    const id = Date.now().toString();
    this.storageService.saveImage({ id, ...image });
    const updatedImages = this.storageService.getAllImages();
    return { images: updatedImages, message: SuccessMessageEnums.IMAGE_UPLOADED };  }

  /**
   * Retrieves all stored images.
   * @returns An array of images.'
   * @param page current page
   * @param limit number of images to retrieve
   */
  async findAll(page: number, limit: number): Promise<Image[]> {
    return this.storageService.getAllImages(page, limit);
  }

  /**
   * Removes an image from storage.
   * @param id - The identifier for the image to be deleted.
   * @returns Success message.
   */
  async remove(id: string): Promise<CustomResponse> {
    
    if (!this.storageService.getImage(id)) {
      throw new HttpException(ErrorMessageEnums.NOT_FOUND, HttpStatus.NOT_FOUND);
    }
    this.storageService.deleteImage(id);
     // Retrieve the updated list of images.
    const updatedImages = this.storageService.getAllImages();
    return { images: updatedImages, message: SuccessMessageEnums.IMAGE_DELETED };
  }
}
