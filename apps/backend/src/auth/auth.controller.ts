import { Body, Controller, Get, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDTO } from './dtos/create-user.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly _auth: AuthService) {}

  @Post('/register')
  register(@Body() body: CreateUserDTO) {
    return this._auth.create(body);
  }

  @Post('/login')
  login(@Body() body: CreateUserDTO) {
    return body;
  }

  @Get('/profile')
  profile() {
    return {};
  }
}
