/* eslint-disable prettier/prettier */
import { IsString, IsNumber, IsOptional } from "class-validator";

export class CreateMovieDto{

  @IsString() //타입이 스트링인지 검사
  readonly title: string;

  @IsNumber()// 타입이 넘버인지 검사
  readonly year: number;

  @IsOptional()
  @IsString({ each: true })
  readonly genres: string[];
}