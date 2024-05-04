import { Injectable } from '@nestjs/common';
import * as SendGrid from '@sendgrid/mail';

export type MailData = SendGrid.MailDataRequired;

@Injectable()
export class EmailService {
  constructor() {
    console.log('key: ', process.env.SENDGRID_API_KEY);
    SendGrid.setApiKey(process.env.SENDGRID_API_KEY);
  }

  async send(mail: SendGrid.MailDataRequired) {
    try {
      return await SendGrid.send(mail);
    } catch (error) {
      console.log('mail error: ', error.response.body);
    }
  }
}
