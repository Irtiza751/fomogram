import { Controller, Get, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { Response } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello() {
    return this.appService.getHello();
  }

  @Get('/cookie')
  setCookie(@Res({ passthrough: true }) res: Response) {
    res.cookie('some_cookie', 'Hi there how are you?');
    return 'cookies set.';
  }
}
