/* eslint-disable prettier/prettier */
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
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

  get_first_last_col():Promise<User[]>
  {
     return this.usersRepository.find({
      select: {
        firstName: true,
        lastName:true
        
    },
     })
  }
  get_id(id:number):Promise<User[]>
  {
     return this.usersRepository.find({
      where: {
        id: id,
      },
     })
     
  }
  get_all(){
    return this.usersRepository.find({
      order: {
         
          id: "ASC",
      },
  })
  }

  get_limit(no:number){
    return this.usersRepository.find({
      take:no,
      order:{
        id: "ASC",
      }
    },
  )
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