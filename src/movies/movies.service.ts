import { Injectable, NotFoundException } from '@nestjs/common';
import { Model } from 'mongoose';
import { Movies, MoviesDocument} from "./movies.schema"
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class MoviesService {
    constructor(@InjectModel(Movies.name) private readonly MoviesModel: Model<MoviesDocument> ){}
    async getMovies(): Promise<MoviesDocument[]> {
        try {
            const users = await this.MoviesModel.find().exec()
            return users
        } catch (error) {
            throw new NotFoundException("No data found")
        }
    }

    async getSingleMovie(movieID: string) : Promise<MoviesDocument> {
        try {
            const singleMovie = await this.MoviesModel.findById(movieID).exec()
            return singleMovie
        } catch (error) {
            throw new NotFoundException("No record found with the given ID")
        }
    }

    async updateMovie(movieID:string) : Promise<MoviesDocument> {
        try {
            const updatedMovie = this.MoviesModel.findByIdAndUpdate(movieID).exec()
            return updatedMovie
        } catch (error) {
            throw new NotFoundException("No record found with the given ID")
        }
    }

    async postMovie(newMovie: any) : Promise<MoviesDocument>{
        try {
            const movie = new this.MoviesModel(newMovie)
            const savedMovie = movie.save()
            return savedMovie
        } catch (error) {
            throw new NotFoundException("No record found with the given ID")
        }
    }
}
 