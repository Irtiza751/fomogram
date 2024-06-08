import {
  Body,
  Controller,
  Post,
  Get,
  Query,
  UseGuards,
  Request,
} from '@nestjs/common';
import { UserService } from './user.service';
import { FollowDto } from './dtos/follow.dto';
import { AuthGuard } from 'src/auth/auth.guard';
import { RequestObj } from 'src/post/post.controller';

@Controller('user')
export class UserController {
  constructor(private readonly userSrv: UserService) {}

  @UseGuards(AuthGuard)
  @Get('/search')
  search(@Query('search') search: string, @Request() req: RequestObj) {
    return this.userSrv.searchUser(search, req.user.id);
  }

  @UseGuards(AuthGuard)
  @Post('/follow')
  follow(@Body() data: FollowDto) {
    return this.userSrv.addFollowerIfNot(data);
  }

  @UseGuards(AuthGuard)
  @Get('/profile')
  profile(@Request() req: RequestObj) {
    return this.userSrv.userProfile(req.user.id);
  }
}
