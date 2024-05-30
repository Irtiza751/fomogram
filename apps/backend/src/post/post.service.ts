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
      include: {
        user: { select: { image: true, username: true } },
        likes: { select: { userId: true } },
      },
    });
  }

  async likePost(post: { userId: number; postId: number }) {
    // find if is like already exist for a given post.
    const alreadyLiked = await this.prisma.likes.findFirst({
      where: {
        postId: post.postId,
        userId: post.userId,
      },
    });
    // if the like does exist then delete it?
    if (alreadyLiked) {
      return await this.prisma.likes.delete({ where: { id: alreadyLiked.id } });
    }

    // if the like doesn't exist for the given post then create it.
    return await this.prisma.likes.create({
      data: post,
    });
  }

  async findMyPosts(userId: number) {
    return await this.prisma.post.findMany({
      orderBy: { createdAt: 'desc' },
      where: {
        userId,
      },
      select: {
        id: true,
        image: true,
        caption: true,
        createdAt: true,
        user: {
          select: {
            username: true,
            email: true,
            image: true,
          },
        },
        likes: true,
      },
    });
  }
}
