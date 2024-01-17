import { Controller, Post, Get, Delete, Patch, Put, Param, Body } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from 'src/users/users.dto';
import { ApiTags } from '@nestjs/swagger';


@ApiTags("Users")
@Controller('users')
export class UsersController {
    constructor( private userService : UsersService) {}

@Get()
usersList(): any {
    return this.userService.userList()
}
 
@Get(":id")
findOneUser(@Param('id') userId: string) : any {
    return this.userService.findOneUser(userId)
}

@Post()
postUser(@Body() newUser: CreateUserDto): any {
    return this.userService.postUser(newUser)
}

@Put(":id")
updateUser(@Param('id') userId: string, @Body() userUpdate: CreateUserDto):any {
    return this.userService.updateUser(userId, userUpdate)
}

@Delete(":id")
deleteUser(@Param('id') userId: string): any {
    return this.userService.deleteUser(userId)
}
}
