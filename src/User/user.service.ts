/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';


@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

//   findOne(id: number): Promise<User | null> {
//     return this.usersRepository.findOneBy({ id });
//   }
    createuser(userdata: object){
     console.log(userdata);
     const as=this.usersRepository.create(userdata);
     return this.usersRepository.save(as);
  }

  async remove(id: number): Promise<void> {
    await this.usersRepository.delete(id);
  }


}