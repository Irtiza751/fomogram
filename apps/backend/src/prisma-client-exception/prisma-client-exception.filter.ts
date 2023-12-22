import { ArgumentsHost, Catch, HttpStatus } from '@nestjs/common';
import { BaseExceptionFilter } from '@nestjs/core';
import { Prisma } from '@prisma/client';
import { Response } from 'express';

@Catch(Prisma.PrismaClientKnownRequestError)
export class PrismaClientExceptionFilter extends BaseExceptionFilter {
  catch(exception: Prisma.PrismaClientKnownRequestError, host: ArgumentsHost) {
    console.error('exception: ', exception.code);
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const message = this._extractField(exception.message.replace(/\n/g, ''));

    switch (exception.code) {
      case 'P2002':
        const status = HttpStatus.CONFLICT;
        response.status(status).json({
          statusCode: status,
          message: message,
        });
        break;
      default:
        // default 500 error code
        super.catch(exception, host);
        break;
    }
  }

  _extractField(errorMessage: string) {
    // Define the regular expression pattern to match the field name
    const pattern = /(`[a-zA-Z_]+`)/;

    // Use the RegExp exec method to find the match in the error message
    const match = pattern.exec(errorMessage);

    // Check if a match is found
    if (match && match[1]) {
      // Return the matched field
      return match[1];
    } else {
      // Return null if no match is found
      return null;
    }
  }
}
