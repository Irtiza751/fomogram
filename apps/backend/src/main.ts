import { HttpAdapterHost, NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { PrismaClientExceptionFilter } from './prisma-client-exception/prisma-client-exception.filter';
import * as session from 'express-session';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const { httpAdapter } = app.get(HttpAdapterHost);
  app.setGlobalPrefix('api');
  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalFilters(new PrismaClientExceptionFilter(httpAdapter));
  app.use(
    session({
      resave: false,
      secret: process.env.SESSION_SECRET,
      saveUninitialized: false,
      cookie: {
        httpOnly: true,
        maxAge: 2 * (1000 * 60 * 60), // 2 hours,
      },
    }),
  );
  await app.listen(3000);
}
bootstrap();
