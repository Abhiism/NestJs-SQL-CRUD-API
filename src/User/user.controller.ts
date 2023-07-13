/* eslint-disable prettier/prettier */
import { HttpException,HttpStatus,Controller, Get, Post ,Body,Param,UsePipes,ValidationPipe,ParseIntPipe} from "@nestjs/common";
//import { Apiservice } from "src/api/api.service";
import { UsersService } from "./user.service";
import { user_dto } from "./user.dto";

//import { as } from "./dto";
// import { as } from "./dto";




@Controller('userdata')
export class UsersController {
    constructor(private userservice: UsersService) {}

    @Get('findall')
    findAll(){
        return this.userservice.findAll();
    }
    @Get('get_firstname_lastname')
    get_some_col(){
        return this.userservice.get_first_last_col();
    }
    
    @Get('get_id=:id')
    get_id(@Param('id',ParseIntPipe) id:number){
        const as=this.userservice.get_id(id);
        if(as) return as;
        else
        throw new HttpException('Not found',HttpStatus.BAD_REQUEST);
    }

    @Get('get_allorder_inc')
    get_order(){
        return this.userservice.get_all();
        
    }
    @Get('get_order_limit_:no')
    get_order_1(@Param('no',ParseIntPipe) no:number){
        return this.userservice.get_limit(no);
        
    }
    
    @Post('Postobject')
    @UsePipes(ValidationPipe)
    Postob(@Body() data: user_dto){
        return this.userservice.createuser(data);
    }
   
    @Post('delete_id_no=:id')
    deleone(@Param('id',ParseIntPipe) id_no: number){
       
        return this.userservice.remove(id_no);
    }
}