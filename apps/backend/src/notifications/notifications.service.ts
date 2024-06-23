import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class NotificationsService {
  constructor(private readonly prisma: PrismaService) {}
  /**
   * @TODO Notification api.
   * - add new notification
   * - mark as read notification
   * - delete notification
   */

  addNotification() {}

  markAsRead() {}

  removeNotification() {}
}
