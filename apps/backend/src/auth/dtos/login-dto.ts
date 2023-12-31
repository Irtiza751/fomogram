import { IsEmail, IsString } from 'class-validator';

export class LoginDto {
  @IsEmail()
  @IsString({ message: 'email is required' })
  email: string;

  @IsString()
  password: string;
}
