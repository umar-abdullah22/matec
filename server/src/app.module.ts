import { Module } from '@nestjs/common';

// config imports
import { ConfigModule } from '@nestjs/config';

// config imports files
import serverConfig from './config/server.config';
import swaggerConfig from './config/swagger.config';

// Module imports
import { GalleryModule } from './modules/gallery/gallery.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [serverConfig, swaggerConfig],
    }),
    GalleryModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
