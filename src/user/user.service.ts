import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';// typeorm 은 db를 쓰려면 spl구문을 써여하는데 typeorm 모듈을 설치해서 쓰면 spl구문 없이 js구문 만으로 쓸 수 있다 // yarn add로 별도의 모듈을 설치
import { User } from './entities/user.entities';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
     constructor(
          @InjectRepository(User) // entity파일의 User클래스 // @InjectRepository는 해당 엔터티(Entity)와 관련된 데이터베이스 작업을 보다 쉽게 처리할 수 있다 // typeorm 설치후 사용가능
          private usersRepository: Repository<User> // Repository 가 typeorm 부분이고 <User>이 엔티티 부분이다 // typeorm에서 User이라는 엔티티 클래스를 쓴다는 뜻
     ) {}

     getUser() {
          return this.usersRepository.find() // db와 연결된 엔티티에 있는 모든 정보를 가져옴 // 회원가입에 굳이 모든 유저 정보를 가져올 필요가 없지만 테스트용! 원래 로그인 회원가입에는 한개의 고유 id만 가져와도 충분
     }

     
}
