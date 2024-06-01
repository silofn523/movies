import { MoviesService } from './movies.service';
import { Movie } from './entities/movies.entity';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
export declare class MoviesController {
    private readonly moviesSarvice;
    constructor(moviesSarvice: MoviesService);
    getAll(): Movie[];
    getOne(Id: number): Movie;
    create(movieData: CreateMovieDto): void;
    remove(Id: number): void;
    path(Id: number, updateData: UpdateMovieDto): void;
}
