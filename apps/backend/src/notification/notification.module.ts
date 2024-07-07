import { Module } from '@nestjs/common';
import { NotificationController } from './notification.controller';
import { NotificationService } from './notification.service';
import { PrismaModule } from 'src/prisma/prisma.module';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  controllers: [NotificationController],
  providers: [NotificationService, PrismaService],
  imports: [PrismaModule, AuthModule],
})
export class NotificationModule {}
