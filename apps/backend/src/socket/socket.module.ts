import { Module } from '@nestjs/common';
import { SocketGateway } from './socket.gateway';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  providers: [SocketGateway],
  imports: [PrismaModule],
})
export class SocketModule {}
