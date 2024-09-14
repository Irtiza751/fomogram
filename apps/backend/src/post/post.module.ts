import { Module } from '@nestjs/common';
import { PostController } from './post.controller';
import { PostService } from './post.service';
import { PrismaModule } from 'src/prisma/prisma.module';
import { AuthModule } from 'src/auth/auth.module';
import { CloudinaryModule } from 'src/cloudinary/cloudinary.module';
import { RedisService } from 'src/redis/redis.service';
import { SocketGateway } from 'src/socket/socket.gateway';

@Module({
  controllers: [PostController],
  providers: [PostService, SocketGateway, RedisService],
  imports: [PrismaModule, AuthModule, CloudinaryModule],
})
export class PostModule {}
