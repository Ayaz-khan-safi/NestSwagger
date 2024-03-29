import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose"
import { Document } from "mongoose"

export type MoviesDocument = Movies & Document

@Schema()
export class Movies {
    @Prop()
    movie: string;
    postedBy: string;
}

export const MoviesSchema = SchemaFactory.createForClass(Movies)