import {
  Body,
  Controller,
  Get,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from 'src/auth/auth.guard';
import { PostService } from './post.service';
import { PostDto } from './dtos/post.dto';

interface RequestObj {
  user: {
    id: number;
    iat: number;
    exp: number;
  };
}

@Controller('post')
export class PostController {
  constructor(private readonly post: PostService) {}

  @UseGuards(AuthGuard)
  @Post('/create')
  createPost(@Request() req: RequestObj, @Body() body: PostDto) {
    const { id: userId } = req.user;
    const post = { ...body, userId };
    return this.post.create(post);
  }

  @UseGuards(AuthGuard)
  @Get('/allposts')
  allPost() {
    return this.post.findAll();
  }
}
