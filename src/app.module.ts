import { Module } from '@nestjs/common';
import { TestModule } from './test/test.module';
import { MoviesModule } from './movies/movies.module';
import { AppController } from './app.controller';

@Module({ // 데코레이터 (클래스에 함수기능 추가 가능)
  imports: [TestModule, MoviesModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {} 
