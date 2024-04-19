import { Injectable } from '@nestjs/common';
import { postmanBody } from './utils';

@Injectable()
export class AppService {
  getHello() {
    
    return postmanBody();
  }
}
