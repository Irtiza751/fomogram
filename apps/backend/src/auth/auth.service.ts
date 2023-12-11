import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

type User = {
  email: string;
  password: string;
  image: string;
};

@Injectable()
export class AuthService {
  constructor(private _prisma: PrismaService) {}

  async create(user: User) {
    return this._prisma.user.create({
      data: user,
    });
  }
}
