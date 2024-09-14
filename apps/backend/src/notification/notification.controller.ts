import { Controller, Get, Request, UseGuards } from '@nestjs/common';
import { NotificationService } from './notification.service';
import { AuthGuard } from 'src/auth/auth.guard';
import { RequestPayload } from 'src/utils/types';

@Controller('notification')
export class NotificationController {
  constructor(private readonly notificationSrv: NotificationService) {}

  @UseGuards(AuthGuard)
  @Get('/all')
  notifications(@Request() req: RequestPayload) {
    const { id } = req.user;
    return this.notificationSrv.getNotifications(id);
  }
}
