import { IsString } from 'class-validator';

export class UpdatePasswordDto {
  @IsString({ message: 'password is required' })
  password: string;

  @IsString({ message: 'userId is required' })
  userId: string;
}
