import { ApiProperty } from "@nestjs/swagger";

export class MoviesDto {
    @ApiProperty({type:String, example:"John wick2"})
    movie: string;
    postedBy: string;
}