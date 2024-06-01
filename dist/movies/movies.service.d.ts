import { Movie } from './entities/movies.entity';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
export declare class MoviesService {
    private movies;
    getAll(): Movie[];
    getOne(Id: number): Movie;
    remove(Id: number): void;
    create(movieData: CreateMovieDto): void;
    path(Id: number, updateData: UpdateMovieDto): void;
}
