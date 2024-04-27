import { IsEmail, IsString } from 'class-validator';

export class ResetDto {
  @IsEmail()
  @IsString({ message: 'email is required' })
  email: string;
}
