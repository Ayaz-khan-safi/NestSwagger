import { Controller, Post, Get, } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor( private userService : UsersService) {}

@Get()
usersList(): any {
    return this.userService.userList()
}
}
