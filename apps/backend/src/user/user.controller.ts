import {
  Body,
  Controller,
  Post,
  Get,
  Query,
  UseGuards,
  Request,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { UserService } from './user.service';
import { FollowDto } from './dtos/follow.dto';
import { AuthGuard } from 'src/auth/auth.guard';
import { RequestObj } from 'src/post/post.controller';
import { UpdateUserDto } from './dtos/update-user.dto';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('user')
@UseGuards(AuthGuard)
export class UserController {
  constructor(private readonly userSrv: UserService) {}

  @Get('/search')
  search(@Query('search') search: string, @Request() req: RequestObj) {
    return this.userSrv.searchUser(search, req.user.id);
  }

  @Post('/follow')
  follow(@Body() data: FollowDto) {
    return this.userSrv.addFollower(data);
  }

  @Get('/profile')
  profile(@Request() req: RequestObj) {
    return this.userSrv.userProfile(req.user.id);
  }

  @Post('/update')
  @UseInterceptors(FileInterceptor('image'))
  update(
    @Request() req: RequestObj,
    @Body() profile: UpdateUserDto,
    @UploadedFile() image: Express.Multer.File,
  ) {
    return this.userSrv.updateProfile(profile, req.user.id, image);
  }
}
