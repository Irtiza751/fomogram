import {
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';

import { Server } from 'socket.io';

@WebSocketGateway(5000, {
  cors: {
    origin: '*',
  },
})
export class NotificationsGateway {
  @WebSocketServer()
  server: Server;

  sendNotification(from: string) {
    this.server.emit('onNotification', {
      msg: 'You have a new Notification from: ' + from,
    });
  }

  @SubscribeMessage('message')
  handleMessage(client: any, data: any) {
    console.log(`Message received from client id: ${client.id}`);
    console.debug(`Payload:`, data);

    this.sendNotification('server');
  }
}
