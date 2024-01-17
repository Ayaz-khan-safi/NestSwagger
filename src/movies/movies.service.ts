import { Injectable } from '@nestjs/common';
import { Movies, MoviesDocument} from "./movies.schema"

@Injectable()
export class MoviesService {
    getMovies(): any {
        return "This is movies listing route"
    }
}
