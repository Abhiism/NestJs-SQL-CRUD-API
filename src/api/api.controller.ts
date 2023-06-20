/* eslint-disable prettier/prettier */
import { Controller, Get, Post ,Body, Req} from "@nestjs/common";
import { Apiservice } from "src/api/api.service";
//import { as } from "./dto";
// import { as } from "./dto";




@Controller('firstapi')
export class Apicontoller {
    constructor(private apiservice: Apiservice) {}

    @Get('Getobject')
    getobject() {
        return this.apiservice.getobject();
    }

    @Post('Postobject')
    postobject(@Body() postapi: object) {

        
        return this.apiservice.postobject(postapi);
        
    }
}