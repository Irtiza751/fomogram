import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { hash } from 'bcrypt';

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
    const saltRound = 10;
    // hash plain text password.
    const hashPassword = await hash(user.password, saltRound);
    // replace plain password with hash.
    user.password = hashPassword;
    // creating a random profile image
    const image = `https://ui-avatars.com/api/?name=${user.username}`;
    // assigning that to the user object
    user.image = image;
    return this._prisma.user.create({
      data: user,
    });
  }
}
