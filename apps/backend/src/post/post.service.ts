import { Injectable } from '@nestjs/common';
import { CloudinaryService } from 'src/cloudinary/cloudinary.service';
import { PrismaService } from 'src/prisma/prisma.service';

export interface Post {
  userId: number;
  image?: string;
  caption: string;
}

@Injectable()
export class PostService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly cloudinary: CloudinaryService,
  ) {}

  async create(post: Post, file?: Express.Multer.File) {
    if (file) {
      const fileRes = await this.cloudinary.upload(file);
      post.image = fileRes.url;
    }

    return await this.prisma.post.create({
      data: post,
    });
  }

  async findAll(userId: number) {
    /**
     * @todo Fetch posts of followings & followers
     */
    console.log(userId);
    return await this.prisma.post.findMany({
      orderBy: { createdAt: 'desc' },
      include: { user: { select: { image: true, username: true } } },
    });
  }
}
