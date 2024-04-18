import { IsNumber } from 'class-validator';

export class LikePostDto {
  @IsNumber()
  userId: number;

  @IsNumber()
  postId: number;
}
