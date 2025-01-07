/**
 * 인터페이스
 * -> 타입에 이름을 지어주는 또 다른 문법이다.
 * -> 인터페이스에서는 유니온(|) 이나 인터섹션(&) 타입을 만들 수 없다.
 */

interface Person {
  name: string;
  age?: number;
  // sayHi: () => void; // 함수 표현식
  // sayHi() : void // 호출 시그니처
  sayHi(a?: number, b?: number): void; // 호출 시그니처 <- 함수 오버로딩을 구현할 때는 호출 시그니처를 사용해야함
}

const person: Person = {
  name: "안수진",
  age: 28,
  sayHi: () => {
    console.log("hi");
  },
};

// 오버로딩 구현
person.sayHi();
person.sayHi(1, 2);
