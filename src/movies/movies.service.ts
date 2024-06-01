/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { Movie } from './entities/movies.entity';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';

@Injectable()
export class MoviesService {
  private movies: Movie[] = []; // private는 js 문법 // 배열 어레이를 만들고 타입을 Movie로 지정 (Alias 타입)

  getAll(): Movie[] { // MoviesController 파일에 있는 getAll 함수를 작성 함수이름은 꼭 같을필요는 없음
    return this.movies // movies.entity 파일에 현제 인스턴스값을 리턴
  }

  getOne(Id: number): Movie { // 컨트롤러에 있는 getOne 함수를 그대로 작성 getOne함수는 파라미터에 아이디를 받으니깐 여기도 파라미터에 아이디를 입력
    const movie = this.movies.find(movie => movie.id === Id) // find 함수는 해당하는 한개의 값만 반환 movie는 파라미터. 파라미터는 오른쪽에 들어갈 객체와 같아야함 
    // 이 코드는 find 함수를 이용하여 getOne에 받은 Id를 Movie 클래스에 있는 id와 타입을 같게 변경시켜줌 이걸 movie 변수에 저장
    if(!movie) { // 찾으려는 아이디가 없을때
      throw new NotFoundException(`Movie with ID ${Id} Not found.`);//////
    }//////
    return movie; // 선언한 변수값 반환
  }

  remove(Id: number){ //////////////
    this.getOne(Id);//////////
    this.movies = this.movies.filter(movie => movie.id !== Id);////////////////
  }//////////

  create(movieData: CreateMovieDto) {///////////
    this.movies.push({//////////
      id: this.movies.length + 1,///////////
      ...movieData,///////////
    })//////
  }

  path(Id: number, updateData: UpdateMovieDto){//////
    const movie = this.getOne(Id);/////
    this.remove(Id);////
    this.movies.push({ ...movie, ...updateData });/////
  }

}
