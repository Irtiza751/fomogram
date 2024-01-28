import { IsString } from 'class-validator';

export class PostDto {
  @IsString({ message: 'image is required' })
  image: string;

  @IsString({ message: 'caption is required' })
  caption: string;
}
