import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  /**
   * return welcome message
   */
  sayWelcome(): string {
    return 'Welcome to the NestJS API!';
  }
}
