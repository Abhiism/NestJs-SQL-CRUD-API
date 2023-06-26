/* eslint-disable prettier/prettier */
import { Controller, Get, Post ,Body,Param} from "@nestjs/common";
//import { Apiservice } from "src/api/api.service";
import { UsersService } from "./user.service";
//import { as } from "./dto";
// import { as } from "./dto";




@Controller('userdata')
export class UsersController {
    constructor(private userservice: UsersService) {}

    @Get('findall')
    findAll(){
        return this.userservice.findAll();
    }
    
    
    @Post('Postobject')
    Postob(@Body() data: object){
        return this.userservice.createuser(data);
    }
   
    @Post('delete_id_no=:id')
    deleone(@Param('id') id_no: number){
       
        return this.userservice.remove(id_no);
    }
}