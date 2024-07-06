import {
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';

import { Server, Socket } from 'socket.io';
type NotificationData = string | Array<any> | Record<string, any>;
@WebSocketGateway({
  cors: {
    origin: '*',
  },
})
export class NotificationsGateway {
  @WebSocketServer()
  server: Server;

  private connectedUsers: Map<number, Socket> = new Map();

  handleConnection(client: Socket) {
    // 10 represents the base 10 number system.
    const clientId = parseInt(client.handshake.query.userId as string, 10);
    console.log({ clientId });
    if (clientId) {
      this.connectedUsers.set(clientId, client);
    }
  }

  sendNotification(to: number, data: NotificationData) {
    this.connectedUsers.get(to).emit('onNotification', { data });
  }

  @SubscribeMessage('message')
  handleMessage(client: Socket, data: any) {
    console.log(`Message received from client id: ${client.id}`);
    console.debug(`Payload:`, data);
  }
}
