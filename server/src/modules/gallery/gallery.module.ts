import { Module } from '@nestjs/common';
import { GalleryService } from './gallery.service';
import { GalleryController } from './gallery.controller';
import { MemoryStorageService } from '../../../libs/utils/src/memory-storage';
import { ImageProcessingService } from '@lib/utils/image-processing';

@Module({
  controllers: [GalleryController],
  providers: [GalleryService, MemoryStorageService, ImageProcessingService]
})
export class GalleryModule {}
