import { Injectable } from '@nestjs/common';
import * as sgMail from '@sendgrid/mail';

@Injectable()
export class EmailService {
  constructor() {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  }

  send() {
    const msg = {
      to: 'muhammad.irtiza751@gmail.com',
      from: 'no-reply@fomogram.com', // Use the email address or domain you verified above
      subject: 'Sending with Twilio SendGrid is Fun',
      text: 'and easy to do anywhere, even with Node.js',
      html: '<strong>and easy to do anywhere, even with Node.js</strong>',
    };

    try {
      return sgMail.send(msg);
    } catch (error) {
      console.log(error);
    }
  }
}
