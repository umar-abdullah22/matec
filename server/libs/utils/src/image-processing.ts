import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import * as sharp from 'sharp';
import { ErrorMessageEnums } from 'src/enums/image';

/**
 * Service for processing images using Sharp.
 */
@Injectable()
export class ImageProcessingService {
  /**
   * Compress and resize images.
   * @param buffer - The image buffer to be processed.
   * @returns A promise containing the processed image buffer.
   */
  async compressImage(buffer: Buffer): Promise<Buffer> {
    try {
        return await sharp(buffer)
        // Standard width for compression.
        // Reducing quality to 80 to ensure smaller file size.
        .resize(1024)  
        .jpeg({ quality: 80 })
        .toBuffer();
    } catch (error) {
        throw new HttpException(ErrorMessageEnums.PROCESS_ERROR, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
