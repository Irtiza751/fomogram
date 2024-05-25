import { IsNumber } from 'class-validator';

export class FollowDto {
  @IsNumber()
  followerId: number;
  @IsNumber()
  followingId: number;
}
