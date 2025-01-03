/**
 * 대수 타입
 * -> 여러 개의 타입을 합성해서 새롭게 만들어낸 타입
 * -> 합집합 타입과 교집합 타입이 존재
 */

/**
 * 1. 합집합 - Union타입
 */
let a: string | number;
a = 1;
a = "hello";

let arr: (number | string | boolean)[] = [1, "hello", true];

type Dog = {
  name: string;
  color: string;
};

type Person = {
  name: string;
  language: string;
};

type Union1 = Dog | Person;

let union1: Union1 = {
  name: "",
  color: "",
};

let union2: Union1 = {
  name: "",
  language: "",
};

let union3: Union1 = {
  name: "",
  color: "",
  language: "",
};

// 에러 발생 : 한쪽에만 포함되거나 둘다 포함되어야한다. name은 Dog타입으로 가기엔 color 가 없고 Person타입으로 가이엔 language가 없기 때문에 Union1 타입이 될 수 없다.
// let union4: Union1 = {
//   name: "",
// };

/**
 * 2. 교집합 - Intersection타입
 */
let variable: number & string; // nerver 타입 (공집합)

type Intersection = Dog & Person;

let intersection: Intersection = {
  name: "",
  color: "",
  language: "", // 하나라도 빠지면 intersection 타입에 포함될 수 없다.
};
