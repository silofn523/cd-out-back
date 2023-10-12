import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
//Entity 클래스는 TypeORM을 사용하여 데이터베이스와 상호작용하는 데 사용됩니다.
@Entity()
export class User {
     @PrimaryGeneratedColumn()// 엔터티(Entity) 클래스의 기본 키(primary key) 컬럼을 정의하는 데 사용
     // 자동생성 되는 column // id가 안겹치게 자동으로 생성됌 uuid같은 느낌이지만 숫자로 아이디가 나타남
     id: number; // 고유 아이디

     @Column({ unique: true }) // div같은 느낌 // @Column()에 추가적인 옵션들을 제공하여 컬럼의 유형, 길이, 기본값 등을 지정
     // { unique: true } 는 겹치면 에러를 뜨게 한다 // 회원가입할때 닉네임이 겹치면 안되기 때문!
     name: string; // 닉네임

     @Column()
     pw: number; // 비밀번호

     @Column({ unique: true })
     email: string; // 이메일
}