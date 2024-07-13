import {
  Body,
  Controller,
  Get,
  Post,
  Request,
  Res,
  UnprocessableEntityException,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDTO } from './dtos/create-user.dto';
import { LoginDto } from './dtos/login-dto';
import { AuthGuard } from './auth.guard';
import { Response } from 'express';
import { ResetDto } from './dtos/reset.dto';
import { UpdatePasswordDto } from './dtos/update-password.dto';
import { RequestPayload } from 'src/utils/types';

@Controller('auth')
export class AuthController {
  constructor(private readonly _auth: AuthService) {}

  @Post('/register')
  register(@Body() body: CreateUserDTO) {
    return this._auth.create(body);
  }

  @Post('/login')
  async login(
    @Body() body: LoginDto,
    @Res({ passthrough: true }) res: Response,
  ) {
    const data = await this._auth.validate(body);
    if (data) {
      // the max age of this cookies will be 1hour.
      res.cookie('sessionToken', data.token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
      });
      res.cookie('userId', data.userId, {
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
      });
      return data;
    } else {
      throw new UnprocessableEntityException('In correct email or password');
    }
  }

  @UseGuards(AuthGuard)
  @Get('/logout')
  logout(
    @Request() req: RequestPayload,
    @Res({ passthrough: true }) res: Response,
  ) {
    const userId = req.user.id;
    res.clearCookie('sessionToken');
    res.clearCookie('userId');
    return this._auth.logout(userId);
  }

  @Post('/reset')
  sendResetMail(@Body() body: ResetDto) {
    return this._auth.sendResetMail(body);
  }

  @Post('/update-password')
  updatePassword(@Body() body: UpdatePasswordDto) {
    return this._auth.updatePassword(body);
  }
}
