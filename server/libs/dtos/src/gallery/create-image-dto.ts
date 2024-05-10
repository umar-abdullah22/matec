import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateImageDto {

  @ApiProperty({type: 'file', required: true, format: 'binary'})
  file: Express.Multer.File 
}
