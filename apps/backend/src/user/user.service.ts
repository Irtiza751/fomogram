import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  searchUser(term: string) {
    const where = {
      OR: [
        {
          username: {
            startsWith: term,
          },
        },
        {
          email: {
            startsWith: term,
          },
        },
      ],
    };

    return this.prisma.user.findMany({
      where: term ? where : {},
      select: {
        id: true,
        username: true,
        email: true,
        image: true,
      },
    });
  }
}
