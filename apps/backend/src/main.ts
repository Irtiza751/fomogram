import { HttpAdapterHost, NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import * as cookieParser from 'cookie-parser';
import { PrismaClientExceptionFilter } from './prisma-client-exception/prisma-client-exception.filter';

const allowedOrigins = ['http://localhost:3000', 'https://fomogram.vercel.app'];

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const { httpAdapter } = app.get(HttpAdapterHost);
  app.enableCors({
    origin: allowedOrigins,
    credentials: true,
  });
  app.use(cookieParser());
  app.setGlobalPrefix('api');
  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalFilters(new PrismaClientExceptionFilter(httpAdapter));
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
