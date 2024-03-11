import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private readonly _jwt: JwtService) {}

  async canActivate(context: ExecutionContext) {
    const request = context.switchToHttp().getRequest();
    const token = this.extractTokenFromHeader(request);
    if (!token) {
      throw new UnauthorizedException();
    }
    try {
      const payload = await this._jwt.verifyAsync(token, {
        secret: process.env.JWT_SECRET,
      });
      request.user = payload;
    } catch (error) {
      throw new UnauthorizedException();
    }

    return true;
  }

  private extractTokenFromHeader(request: Request) {
    const cookies = this.decodeCookies(request.headers.cookie);
    console.log('cookies: ', cookies);
    console.log('auth_token: ', cookies['auth_token']);

    // const [type, token] = request.headers.authorization?.split(' ') ?? [];
    // return type === 'Bearer' ? token : null;
    return cookies['auth_token'] || '';
  }

  private decodeCookies(cookies: string): Record<string, string> {
    const cookiesObject = {};
    const cookiesArray = cookies?.split(';');
    cookiesArray?.forEach((cookie) => {
      const [key, value] = cookie.split('=');
      cookiesObject[key] = value;
    });

    return cookiesObject;
  }
}
