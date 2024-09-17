import {
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
  OnGatewayConnection,
  OnGatewayDisconnect,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

type NotificationData = string | Array<any> | Record<string, any>;

@WebSocketGateway({
  cors: {
    origin: '*',
  },
})
export class SocketGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer()
  server: Server;

  private connectedUsers: Map<number, Socket> = new Map();

  handleConnection(client: Socket) {
    const userId = parseInt(client.handshake.query.userId as string, 10);
    console.log({ userId });
    if (userId) {
      this.connectedUsers.set(userId, client);
      console.log(`User connected: ${userId}`);
    }
  }

  handleDisconnect(client: Socket) {
    const userId = parseInt(client.handshake.query.userId as string, 10);
    if (userId) {
      this.connectedUsers.delete(userId);
      console.log(`User disconnected: ${userId}`);
    }
  }

  sendNotification(to: number, data: NotificationData) {
    const user = this.connectedUsers.get(to);
    if (user) {
      user.emit('onNotification', { data });
      console.log(`Notification sent to user ${to}:`, data);
    } else {
      console.error(`User ${to} not connected`);
    }
  }

  @SubscribeMessage('message')
  handleMessage(client: Socket, data: any) {
    console.log(`Message received from client id: ${client.id}`);
    console.debug(`Payload:`, data);
  }
}
