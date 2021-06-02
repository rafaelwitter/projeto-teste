import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World! This is the initial page. Please input /dogs on the URL to get the service';
  }
}
