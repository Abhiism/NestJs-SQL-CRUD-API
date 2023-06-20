/* eslint-disable prettier/prettier */
import { Injectable} from "@nestjs/common";
//import { as } from "./dto";


const reqarr:object[]=[{"email":"abhishek@gmail.com", "Password":"judhjdd"}];


@Injectable({})
export class Apiservice {

    getobject(): object[] {
        return reqarr;
    }

    postobject(postapi: object):object {
        
        reqarr.push(postapi)
        console.log(postapi);
        return {msg :' postapi'};
    }
    
}