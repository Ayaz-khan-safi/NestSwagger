import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';

@Module({
  imports: [MongooseModule.forRoot("mongodb+srv://Ayazkhansafi:orcaloayaz@cluster0.j5bkdp6.mongodb.net/practice?retryWrites=true&w=majority"),UsersModule],
})
export class AppModule {}
