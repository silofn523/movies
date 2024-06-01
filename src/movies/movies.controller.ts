/* eslint-disable prettier/prettier */
import { // imporr 해서 가져온것들
  Controller, 
  Delete, 
  Get,
  Patch, 
  Post, 
  Body,
  Param,
} from '@nestjs/common'; // 네스트 모듈 불러옴
import { MoviesService } from './movies.service';
import { Movie } from './entities/movies.entity';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';

@Controller('movies')// 여기 들어갈 값이 밑에코드가 실행될 경로이다 아무것도 안들어가있으면 루트로 실행 //컨트롤러 불러옴
export class MoviesController { // 클래스 만든다음 export해서 내보냄

constructor(private readonly moviesSarvice: MoviesService) {} // 생성자 함수에 타입을 변경하지 못하게 하고 파라미터를 받는데 타입을 MoviesService 파일에 경로로 지정한다

  @Get()// get 데코레이터를 호출해서
  getAll() : Movie[] { // 함수선언 // 타입을 Movie로 지정 
    // return "This will return all movies"; // 루트 경로로 get 요청이오면 리턴값 반환
    return this.moviesSarvice.getAll();//  MoviesService 에 있는 getAll 함수를 가져와서 리턴
  }

  // @Get("/search")// 주의할점 !! search 코드가 /:id 코드보다 밑에 있으면 Nest는 search를 id로 판단하니깐 조심!
  // search(@Query("year") searchingYear: string) { // 함수선언 // Query파라미터의 값을 받고 searchingYear에 저장 
  //   return `We rae searching for a movie made after : ${searchingYear}`; // 리턴값 반환
  // }

  @Get("/:id")//get 경로로 아이디 값이 들어오면 // 아이디값은 직접 포스트맨에서 입력!
  getOne(@Param("id") Id: number): Movie { // 함수 선언 해서 파라미터를 받고 id 타입 지정, 파라미터로 받은 id가 Id값으로 저장 // 경로로 들어오는 아이디랑 파라미터로 받는 아이디는 같아야함
    // 타입을  movies.entity 경로에 있는 클래스로 지정 
    return this.moviesSarvice.getOne(Id); //moviesService의 `getOne` 메서드를 호출하여 `Id`를 전달하고, 해당 메서드의 반환 값을 반환
  }


  @Post() // 루트 경로로 post 요청이 오면 
  create(@Body() movieData: CreateMovieDto) { // 함수선언 // 내 apii로 받은 body값이 moviedData에 저장됌 movieData 에 타입을 CreateMovieDto 경로에 있는 클래스로 지정
    console.log(movieData)// 값을 출력시켜줌 터미널에다가.
    // return movidData;// movidData에 들어가 있는값 반환
    return this.moviesSarvice.create(movieData);/////
  }

  @Delete("/:id") // 삭제 // 아이디 값으로 delete 요청이오면
  remove(@Param("id") Id: number) { // 함수 선언 해서 파라미터를 받고 id 타입 지정, 파라미터로 받은 id가 Id값으로 저장
    // return `This will delete a movie with the id: ${Id}`; //리턴값 반환
    return this.moviesSarvice.remove(Id);/////
  }

  @Patch("/:id") //@Put()는 모든 부분 업데이트지만 @Patch()는 일부분만 업데이트 해준다 //아이디 값으로 patch 요청이 오면
  path(@Param('id') Id: number,@Body() updateData: UpdateMovieDto) { // 파라미터로 id를 받고 그 값을 Id에 저장하고 타입지정, body로 받은 값이 updateData 로 저장됌
    // return { // 리턴값 반환
    //   updateMovie: Id,// 위에 가져온 파라미터 Id // updateMovie에 Id에 저장된 값을 삽립
    //   ...updateData, // 바디로 가져온 값 // ... 은 js에서 나오는 전개 연산자 // 전개연산자를 통해서 body로 가져온 updateData 에있는 값들을 전개
    // }; 
    return this.moviesSarvice.path(Id,updateData);//////
  }
}

