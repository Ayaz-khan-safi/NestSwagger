import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Users, UsersSchema } from './users/users.schema'
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
import { MoviesController } from './movies/movies.controller';
import { MoviesService } from './movies/movies.service';
import { Movies, MoviesSchema } from './movies/movies.schema';
import * as dotenv from 'dotenv'
dotenv.config()
@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGO_URI),
    MongooseModule.forFeature(
      [
        { name: Users.name, schema: UsersSchema },
        { name: Movies.name, schema: MoviesSchema }
      ]
    ),

  ],
  providers: [UsersService, MoviesService],
  controllers: [UsersController, MoviesController],
})
export class AppModule { }
