import { Module } from '@nestjs/common';
import { NotificationsService } from './notifications.service';
import { NotificationsGateway } from './notifications.gateway';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  providers: [NotificationsService, NotificationsGateway],
  imports: [PrismaModule],
})
export class NotificationsModule {}
