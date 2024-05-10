import { Image } from '@lib/types/gallery';
import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { ErrorMessageEnums } from 'src/enums/image';

/**
 * In-memory storage service for images.
 */
@Injectable()
export class MemoryStorageService {
  private readonly memoryStorage = new Map<string, Image>();

  /**
   * Saves an image in memory.
   * @param image - The image data to save.
   */
  public saveImage(image: Image): void {
    if (this.memoryStorage.has(image.id)) {
      throw new HttpException(ErrorMessageEnums.CONFLICT, HttpStatus.CONFLICT);
    }
    this.memoryStorage.set(image.id, image);
  }

/**
   * Returns a paginated list of stored images.
   * @param page The page number.
   * @param limit The maximum number of images per page.
   * @returns An array of images for the given page.
   */
public getAllImages(page: number = 1, limit: number = 10): Image[] {
  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;
  return Array.from(this.memoryStorage.values()).slice(startIndex, endIndex);
}

  /**
   * Retrieves a single image by ID.
   * @param id - The identifier of the image.
   * @returns The image or undefined if not found.
   */
  public getImage(id: string): Image | undefined {
    return this.memoryStorage.get(id);
  }

  /**
   * Deletes an image by ID.
   * @param id - The identifier of the image to delete.
   */
  public deleteImage(id: string): void {
    if (!this.memoryStorage.has(id)) {
      throw new HttpException(ErrorMessageEnums.NOT_FOUND, HttpStatus.NOT_FOUND);
    }
    this.memoryStorage.delete(id);
  }
}
