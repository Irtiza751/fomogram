import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

type User = {
  username: string;
  email: string;
  password: string;
  image?: string;
};

@Injectable()
export class AuthService {
  constructor(private _prisma: PrismaService) {}

  async create(user: User) {
    // creating a random profile image
    const image = `https://ui-avatars.com/api/?name=${user.username}`;
    // assigning that to the user object
    user.image = image;
    return this._prisma.user.create({
      data: user,
    });
  }
}
