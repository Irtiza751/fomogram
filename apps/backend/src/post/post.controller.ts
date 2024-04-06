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
import { CloudinaryService } from 'src/cloudinary/cloudinary.service';

interface RequestObj {
  user: {
    id: number;
    iat: number;
    exp: number;
  };
}

@Controller('post')
export class PostController {
  constructor(
    private readonly post: PostService,
    private readonly cloudinary: CloudinaryService,
  ) {}

  @UseGuards(AuthGuard)
  @Post('/create')
  createPost(@Request() req: RequestObj, @Body() body: PostDto) {
    const { id: userId } = req.user;
    const post = { ...body, userId };
    return this.post.create(post);
  }

  @UseGuards(AuthGuard)
  @Post('/upload')
  @UseInterceptors(FileInterceptor('image'))
  uploadImage(
    @Request() req: RequestObj,
    @UploadedFile() file: Express.Multer.File,
  ) {
    const { id } = req.user;
    console.log('user id: ', id);
    return this.cloudinary.upload(file);
  }

  @UseGuards(AuthGuard)
  @Get('/allposts')
  allPost(@Request() req: RequestObj) {
    const { id } = req.user;
    return this.post.findAll(id);
  }
}
