import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Users, UsersDocument } from '../schemas/users.schema';

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
}