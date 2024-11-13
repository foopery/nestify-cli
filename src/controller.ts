import { Injectable } from './_utils/decorators/injectable.function';
import { Service } from './service';
import axios from 'axios';

@Injectable()
export class Controller {
  constructor(private service: Service) {}

  init() {
    return this.service.createInitJson();
  }

  async g() {
    return await this.generate();
  }

  async generate() {}
}
