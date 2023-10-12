import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
     constructor(
          private readonly userservice: UserService
     ){}

     @Get()
     getUesr() {
          return this.userservice.getUser()
     }
     
}
