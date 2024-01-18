import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { MoviesService } from './movies.service';
import { MoviesDto } from './movies.dto';


@ApiTags("Movies")
@Controller('movies')
export class MoviesController {
    constructor(private moviesService: MoviesService) { }

    @Get()
    getMovies(): any {
        return this.moviesService.getMovies()
    }

    @Get(":id")
    getSingleMovie(@Param("id") movieID: string): any {
        return this.moviesService.getSingleMovie(movieID)
    }

    @Put(":id")
    updateMovie(@Param("id") movieId: string, @Body() newMovie: MoviesDto): any {
        return this.moviesService.updateMovie(movieId)
    }

    @Post()
    postMovie(@Body() newMovie: MoviesDto): any{
        return this.moviesService.postMovie(newMovie)
    }
}
