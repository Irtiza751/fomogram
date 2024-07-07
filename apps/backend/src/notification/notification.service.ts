import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class NotificationService {
  constructor(private readonly prisma: PrismaService) {}

  getNotifications(userId: number) {
    return this.prisma.notifications.findMany({
      where: {
        receiverId: userId,
      },
      select: {
        id: true,
        isRead: true,
        type: true,
        message: true,
        producer: {
          select: {
            id: true,
            username: true,
            image: true,
          },
        },
      },
    });
  }
}
