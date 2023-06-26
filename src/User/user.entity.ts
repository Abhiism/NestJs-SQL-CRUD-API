/* eslint-disable prettier/prettier */

import { Entity, Column, PrimaryGeneratedColumn} from 'typeorm';


@Entity()
export class User {
  @PrimaryGeneratedColumn({
    type: 'bigint', name:'User_id'}
  )
  id: number;

  @Column({nullable:false, default:''})
  firstName: string;

  @Column({nullable:false, default:''})
  lastName: string;

  @Column({nullable:false, default:''})
  password: string;

}