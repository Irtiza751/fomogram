import {
  Body,
  Controller,
  Get,
  Post,
  Request,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { AuthGuard } from 'src/auth/auth.guard';
import { PostService } from './post.service';
import { PostDto } from './dtos/post.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { LikePostDto } from './dtos/like-post.dto';
import { RequestPayload } from 'src/utils/types';

@Controller('post')
export class PostController {
  constructor(private readonly post: PostService) {}

  @UseGuards(AuthGuard)
  @Post('/create')
  @UseInterceptors(FileInterceptor('image'))
  createPost(
    @UploadedFile() file: Express.Multer.File,
    @Request() req: RequestPayload,
    @Body() body: PostDto,
  ) {
    const { id: userId } = req.user;
    const post = { ...body, userId };
    return this.post.create(post, file);
  }

  @UseGuards(AuthGuard)
  @Get('/allposts')
  allPost(@Request() req: RequestPayload) {
    const { id } = req.user;
    return this.post.findAll(id);
  }

  @Post('/like')
  like(@Body() body: LikePostDto) {
    return this.post.likePost(body);
  }

  @UseGuards(AuthGuard)
  @Get('/myposts')
  myPosts(@Request() req: RequestPayload) {
    const { id } = req.user;
    return this.post.findMyPosts(id);
  }
}
