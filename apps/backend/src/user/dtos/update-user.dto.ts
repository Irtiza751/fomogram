import { IsOptional, IsString } from 'class-validator';

export class UpdateUserDto {
  @IsString({ message: 'Username is required' })
  username: string;

  @IsString()
  @IsOptional()
  bio?: string;

  @IsString()
  @IsOptional()
  image?: string;
}
