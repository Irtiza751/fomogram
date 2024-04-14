import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { hash, compare } from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { RedisService } from 'src/redis/redis.service';

export type User = {
  username: string;
  email: string;
  password: string;
  image?: string;
};

export type Credentials = Pick<User, 'email' | 'password'>;

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwt: JwtService,
    private readonly redis: RedisService,
  ) {}

  client = this.redis.getClient();

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
    return this.prisma.user.create({
      data: user,
    });
  }

  async validate(credentials: Credentials) {
    const user = await this.prisma.user.findUnique({
      where: { email: credentials.email },
    });

    if (!user) return null;
    const isValidPass = await compare(credentials.password, user.password);
    if (isValidPass) {
      const payload = { id: user.id };
      const token = this.jwt.sign(payload);
      const refreshToken = this.jwt.sign(payload, {
        secret: process.env.REFRESH_SECRET,
        expiresIn: '1w',
      });
      const res = await this.client.set(`${user.id}`, refreshToken);
      return { token, res };
    }
    return null;
  }

  async logout(userId: number) {
    return await this.client.del(`${userId}`);
  }
}
