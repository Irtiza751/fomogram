import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { RedisService } from './redis/redis.service';
import { PostModule } from './post/post.module';

@Module({
  imports: [AuthModule, PrismaModule, PostModule],
  controllers: [AppController],
  providers: [AppService, RedisService],
})
export class AppModule {}
