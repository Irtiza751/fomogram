import {
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';

import { Server } from 'socket.io';
type NotificationData = string | Array<any> | Record<string, any>;
@WebSocketGateway({
  cors: {
    origin: '*',
  },
})
export class NotificationsGateway {
  @WebSocketServer()
  server: Server;

  sendNotification(data: NotificationData) {
    this.server.emit('onNotification', { data });
  }

  @SubscribeMessage('message')
  handleMessage(client: any, data: any) {
    console.log(`Message received from client id: ${client.id}`);
    console.debug(`Payload:`, data);

    this.sendNotification('server');
  }
}
