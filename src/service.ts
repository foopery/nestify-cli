import { Injectable } from './_utils/decorators/injectable.function';
import { FsService } from './fs/fs.service';
import { Api } from './api';

@Injectable()
export class Service {
  constructor(
    private fs: FsService,
    private api: Api,
  ) {}

  createInitJson() {
    this.fs.create(
      'nestify-cli.json',
      `{
    "config": {
      "client_id": "<nestify-client-key>",
      "orm": "prisma",
      "schema-dir-path": "prisma/schema",
      "schema-extension": "prisma",
    }
}`,
    );
    console.log('nestify-cli.json 파일이 초기화되었습니다.');
  }
}
