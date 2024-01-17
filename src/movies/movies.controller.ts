import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { MoviesService } from './movies.service';


@ApiTags("Movies")
@Controller('movies')
export class MoviesController {
    constructor( private moviesService : MoviesService){}

    @Get()
    getMovies():any {
        return this.moviesService.getMovies()
    }
}
