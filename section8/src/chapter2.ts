/**
 * keyof 연산자 (keyof operator)
 * -> 특정 객체 타입으로부터 프로퍼티 키들을 모두 스트링 리터럴 유니온 타입으로 추출하는 연산자
 */

interface Person {
  name: string;
  age: number;
}

function getPropertyKey(person: Person, key: keyof Person) {
  return person[key];
}

const person: Person = {
  name: "안수진",
  age: 28,
};

getPropertyKey(person, "name"); // 안수진
