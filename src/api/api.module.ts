import { Module } from '@nestjs/common';
import { Apicontoller } from 'src/api/api.controller';
import { Apiservice } from 'src/api/api.service';

@Module({
  controllers: [Apicontoller],
  providers: [Apiservice],
})
export class ApiModule {}
