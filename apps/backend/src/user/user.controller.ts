import { Body, Controller, Post, Get, Query } from '@nestjs/common';
import { UserService } from './user.service';
import { FollowDto } from './dtos/follow.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userSrv: UserService) {}

  // @UseGuards(AuthGuard)
  @Get('/search')
  search(@Query('search') search: string) {
    return this.userSrv.searchUser(search);
  }

  @Post('/follow')
  follow(@Body() data: FollowDto) {
    return data;
  }
}
