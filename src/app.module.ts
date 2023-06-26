/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { ApiModule } from './api/api.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './User/user.entity';
import { UsersModule } from './User/user.module';
//import { User } from './User/user.entity';
//import { User } from './api/user/user.entity';

@Module({
  imports: [ ApiModule,
    TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306, 
    username: 'root',
    password: '6299638042As@',
    database: 'test',
    entities: [User],
    synchronize: true,
  }), UsersModule
],
})
export class AppModule {}
