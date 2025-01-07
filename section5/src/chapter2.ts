/**
 * 인터페이스 합치기
 * -  동일한 이름으로 선언된 인터페이스는 다 합쳐진다.
 */

interface Person {
  name: string;
}

interface Person {
  age: number;
}

const person: Person = {
  name: "",
  age: 28,
};

/**
 * 모듈 보강
 */
interface Lib {
  a: number;
  b: number;
}

interface Lib {
  c: string;
}

const lib: Lib = {
  a: 1,
  b: 2,
  c: "new", // 추가
};
