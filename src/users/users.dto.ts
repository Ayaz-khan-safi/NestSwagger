import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {
   @ApiProperty({type:String, example:"ayaz"})
   name:string
}