import {
  Body,
  Controller,
  Get,
  HttpCode,
  Post,
  Res,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDTO } from './dtos/create-user.dto';
import { LoginDto } from './dtos/login-dto';
import { AuthGuard } from './auth.guard';
import { Response } from 'express';

@Controller('auth')
export class AuthController {
  constructor(private readonly _auth: AuthService) {}

  @Post('/register')
  register(@Body() body: CreateUserDTO) {
    return this._auth.create(body);
  }

  @HttpCode(200)
  @Post('/login')
  async login(
    @Body() body: LoginDto,
    @Res({ passthrough: true }) res: Response,
  ) {
    const data = await this._auth.validate(body);
    res.cookie('_token', data.token);
    return data;
  }

  @UseGuards(AuthGuard)
  @Get('/profile')
  profile() {
    return { msg: 'Hi there' };
  }
}
