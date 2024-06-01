/* eslint-disable prettier/prettier */
import { PartialType } from "@nestjs/mapped-types/dist";
import { CreateMovieDto } from "./create-movie.dto";

export class UpdateMovieDto extends PartialType(CreateMovieDto) {}

/**이 코드와 동일 */
// @IsString() //타입이 스트링인지 검사
//   readonly title?: string;

//   @IsNumber()// 타입이 넘버인지 검사
//   readonly year?: number;

//   @IsString({ each: true })
//   readonly genres?: string[];