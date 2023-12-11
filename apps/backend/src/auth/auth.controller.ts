import { Body, Controller, Get, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private _auth: AuthService) {}

  @Post('/register')
  register(@Body() body: any) {
    return this._auth.create(body);
  }

  @Post('/login')
  login(@Body() body: any) {
    return body;
  }

  @Get('/profile')
  profile() {
    return {};
  }
}
