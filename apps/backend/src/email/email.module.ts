import { Module } from '@nestjs/common';
import { EmailService } from './email.service';
import { MailgunModule } from 'nestjs-mailgun';

@Module({
  providers: [EmailService],
  exports: [EmailService],
  imports: [
    MailgunModule.forRoot({
      username: 'api',
      key: 'string',
      public_key: 'string', // OPTIONAL
      url: 'string',
    }),
  ],
})
export class EmailModule {}
