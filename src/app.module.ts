import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Users, UsersSchema } from './users/users.schema'
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
import { MoviesModule } from './movies/movies.module';
import { Movies, MoviesSchema } from './movies/movies.schema';

@Module({
  imports: [
    MongooseModule.forRoot("mongodb+srv://Ayazkhansafi:orcaloayaz@cluster0.j5bkdp6.mongodb.net/practice?retryWrites=true&w=majority"),
    MongooseModule.forFeature(
      [
        { name: Users.name, schema: UsersSchema },
        { name: Movies.name, schema: MoviesSchema }
      ]
    ),
    MoviesModule
  ],
  providers: [UsersService],
  controllers: [UsersController],
})
export class AppModule { }
