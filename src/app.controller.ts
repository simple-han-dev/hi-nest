import { Controller, Get } from "@nestjs/common";
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  /*
    Add a new route and handler
    1. call decorator
    2. defind path
    3. define method
    + Decorators and methods must have no spaces

    @decorator(path)
    method() {}

    [sample]

    @Get('/hello')
    sayHello() {
      return 'Hello World!';
    }

    @Post('/hello')
    saveName() {
      ...
    }

    express에서는 아래 처럼 사용했었음
    app.get('/hello', (req, res) => {
      ...
    }
  */

  @Get('/hello')
  sayHello(): string {
    return this.appService.sayWelcome();
  }
}
