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
import { UpdateUserDto } from './dtos/update-user.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { RequestPayload } from 'src/utils/types';

@Controller('user')
@UseGuards(AuthGuard)
export class UserController {
  constructor(private readonly userSrv: UserService) {}

  @Get('/search')
  search(@Query('search') search: string, @Request() req: RequestPayload) {
    return this.userSrv.searchUser(search, req.user.id);
  }

  @Post('/follow')
  follow(@Body() data: FollowDto) {
    return this.userSrv.addFollowerIfNot(data);
  }

  @Get('/profile')
  profile(@Request() req: RequestPayload) {
    return this.userSrv.userProfile(req.user.id);
  }

  @Post('/update')
  @UseInterceptors(FileInterceptor('image'))
  update(
    @Request() req: RequestPayload,
    @Body() profile: UpdateUserDto,
    @UploadedFile() image: Express.Multer.File,
  ) {
    return this.userSrv.updateProfile(profile, req.user.id, image);
  }
}
