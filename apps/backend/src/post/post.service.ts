import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

export interface Post {
  userId: number;
  image: string;
  caption: string;
}

@Injectable()
export class PostService {
  constructor(private readonly prisma: PrismaService) {}

  async create(post: Post) {
    return await this.prisma.post.create({
      data: post,
    });
  }

  async findAll() {
    return await this.prisma.post.findMany({
      include: { user: { select: { image: true, username: true } } },
    });
  }
}
