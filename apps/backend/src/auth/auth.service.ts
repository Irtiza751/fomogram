import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { hash, compare } from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { RedisService } from 'src/redis/redis.service';
import { EmailService } from 'src/email/email.service';

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
    private readonly email: EmailService,
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
      const userId = this.encode(String(user.id));
      return { token, res, userId };
    }
    return null;
  }

  async logout(userId: number) {
    return await this.client.del(`${userId}`);
  }

  async resetPassword({ email }: { email: string }) {
    const mailData = {
      to: email,
      from: 'muhammad.irtiza751@gmail.com',
      subject: 'Reset password',
      text: 'Hi, <username> \n We have received a request to reset your password',
    };
    return this.email.send(mailData);
  }

  encode(data: string) {
    const encoded = Buffer.from(data, 'utf-8').toString('base64');
    return encoded;
  }
}
