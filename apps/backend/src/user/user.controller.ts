import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { FollowDto } from './dtos/follow.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userSrv: UserService) {}

  @Post('/follow')
  follow(@Body() data: FollowDto) {
    return data;
  }
}
