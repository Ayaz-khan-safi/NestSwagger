import { Injectable, NotFoundException } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Users, UsersDocument } from './users.schema';
import { CreateUserDto } from './users.dto';

@Injectable()
export class UsersService {
    constructor(@InjectModel(Users.name) private readonly userModel: Model<UsersDocument>) {}

    async userList(): Promise<UsersDocument[]> {
        try {
            const users = await this.userModel.find().exec();
            return users;
        } catch (error) {
            throw new Error(`Error fetching user list: ${error.message}`);
        }
    }

    async postUser(newUser: any): Promise<UsersDocument>{
        try {
            const user = new this.userModel(newUser)
            const savedUser = await user.save()
            return savedUser
        } catch (error) {
            throw new Error(`Error posting new user: ${error.message}`);
        }
    }

    async deleteUser(userId: string) : Promise<any> {
        const deletedUser = await this.userModel.findByIdAndDelete(userId)
        if( !deletedUser){
            throw new NotFoundException(`User with the ID ${userId} does not exist`)
        }
        return `user ${userId} is deleted successfuly`
    }

    async updateUser(userId: string, userUpdate: CreateUserDto ): Promise<any> {
        const updatedUser = await this.userModel.findByIdAndUpdate(userId, userUpdate, {new: true}).exec()
        if( !updatedUser){
            throw new NotFoundException(`User with the ID ${userId} does not exist`)
        }
        return `user ${userId} is updated successfuly`
    }

    async findOneUser(userId: string): Promise<any> {
        const user = await this.userModel.findById(userId).exec()

        if(!user){
            throw new NotFoundException(`User with the ID ${userId} does not exist`)
        }
        return user
    }
}