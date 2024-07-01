import { Module } from '@nestjs/common';
import { PostController } from './post.controller';
import { PostService } from './post.service';
import { PrismaModule } from 'src/prisma/prisma.module';
import { AuthModule } from 'src/auth/auth.module';
import { CloudinaryModule } from 'src/cloudinary/cloudinary.module';
import { NotificationsGateway } from 'src/notifications/notifications.gateway';
import { RedisService } from 'src/redis/redis.service';

@Module({
  controllers: [PostController],
  providers: [PostService, NotificationsGateway, RedisService],
  imports: [PrismaModule, AuthModule, CloudinaryModule],
})
export class PostModule {}
