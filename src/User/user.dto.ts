/* eslint-disable prettier/prettier */
import { IsNotEmpty } from "class-validator";

/* eslint-disable prettier/prettier */
export class user_dto {
    
    
    id?: number;
     
    @IsNotEmpty()
    firstName: string;
    
    @IsNotEmpty()
    lastName: string;

    @IsNotEmpty()
    password : string;
}