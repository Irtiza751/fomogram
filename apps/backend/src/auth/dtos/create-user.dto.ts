import { IsString, IsOptional, IsEmail } from 'class-validator';
export class CreateUserDTO {
  @IsString()
  username: string;

  @IsEmail()
  @IsString({ message: 'email is required' })
  email: string;

  @IsString()
  password: string;

  @IsOptional()
  image?: string;
}
