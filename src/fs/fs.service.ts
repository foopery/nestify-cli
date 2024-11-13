import { Injectable } from '../_utils/decorators/injectable.function';
import * as fs from 'node:fs';

@Injectable()
export class FsService {
  constructor() {}

  isExist(path: string): boolean {
    return fs.existsSync(path);
  }

  create(path: string, content: any, options?: { isForce?: boolean }): void {
    return fs.writeFileSync(path, content, { ...(options?.isForce && { flag: 'w' }) });
  }
}
