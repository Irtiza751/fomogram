import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { hash, compare } from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

export type User = {
  username: string;
  email: string;
  password: string;
  image?: string;
};

@Injectable()
export class AuthService {
  constructor(
    private readonly _prisma: PrismaService,
    private readonly jwt: JwtService,
  ) {}

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

  async validate(credentials: Pick<User, 'email' | 'password'>) {
    const user = await this._prisma.user.findUnique({
      where: { email: credentials.email },
    });
    const isValidPass = compare(credentials.password, user.password);
    if (isValidPass) {
      const payload = { id: user.id };
      const token = this.jwt.sign(payload);
      return { token };
    }
    return null;
  }
}
