import { Redis } from '@upstash/redis';
import { Injectable } from '@nestjs/common';

@Injectable()
export class RedisService {
  getClient() {
    const redis = new Redis({
      url: process.env.UPSTASH_REDIS_URL,
      token: process.env.UPSTASH_REDIS_TOKEN,
    });
    return redis;
  }
}
