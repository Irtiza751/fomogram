import { IsString, IsOptional } from 'class-validator';

export class PostDto {
  @IsOptional()
  image: string;

  @IsString({ message: 'caption is required' })
  caption: string;
}
