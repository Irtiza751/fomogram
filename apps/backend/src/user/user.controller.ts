import { Controller, Get, Query } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  // @UseGuards(AuthGuard)
  @Get('/search')
  search(@Query('search') search: string) {
    return this.userService.searchUser(search);
  }
}
