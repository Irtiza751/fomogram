import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { FollowDto } from './dtos/follow.dto';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  searchUser(term: string, userId: number) {
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

    const elseWhere = {
      id: { not: userId },
    };

    return this.prisma.user.findMany({
      where: term ? where : elseWhere,
      select: {
        id: true,
        username: true,
        email: true,
        image: true,
        followers: {
          select: { followerId: true },
          where: {
            followerId: userId,
          },
        },
      },
    });
  }

  async addFollowerIfNot(data: FollowDto) {
    const followings = await this.prisma.followers.findMany({
      where: {
        followerId: data.followerId,
      },
    });

    const isFollowing = followings.find(
      (following) => following.followingId === data.followingId,
    );

    console.log('already following: ', !!isFollowing);
    if (isFollowing) {
      return this.prisma.followers.delete({
        where: {
          id: isFollowing.id,
        },
      });
    }

    return this.prisma.followers.create({ data });
  }

  userProfile(userId: number) {
    const user = this.prisma.user.findUnique({
      where: { id: userId },
      select: {
        username: true,
        email: true,
        bio: true,
        image: true,
        followers: true,
        // posts: true,
      },
    });
    return user;
  }
}
