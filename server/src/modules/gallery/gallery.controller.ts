import { Controller, Get, Post, Param, Delete, UploadedFile, UseInterceptors, HttpException, HttpStatus, Body, Query } from '@nestjs/common';
import { GalleryService } from './gallery.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiConsumes, ApiTags } from '@nestjs/swagger';
import { CustomResponse, Image } from '@lib/types/gallery';
import { CreateImageDto } from '@lib/dtos';
import { ErrorMessageEnums } from 'src/enums/image';
import { SWAGGER_API_TAG } from 'src/enums/swagger';

@ApiTags(SWAGGER_API_TAG.GALLERY)
@Controller('gallery')
export class GalleryController {
  constructor(private readonly galleryService: GalleryService) {}

  @Get()
  getAllImages(@Query('page') page: number = 1, @Query('limit') limit: number = 10): Promise<Image[]> {
    return this.galleryService.findAll(page, limit);
  }

  @ApiConsumes('multipart/form-data')
  @Post()
  @UseInterceptors(FileInterceptor('file'))
  async uploadImage(@UploadedFile() file: Express.Multer.File, @Body() body: CreateImageDto): Promise<CustomResponse> {
    if (!file) {
      throw new HttpException(ErrorMessageEnums.EMPTY_FILE, HttpStatus.BAD_REQUEST);
    }
    return this.galleryService.create(file);
  }

  @Delete(':id')
  deleteImage(@Param('id') id: string): Promise<{ message: string }> {
    return this.galleryService.remove(id);
  }
}
