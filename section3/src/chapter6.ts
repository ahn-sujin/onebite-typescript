/**
 * 타입 단언
 * -> 의도와 다르게  타입이 추론될 때
 * -> as 뒤에 있는 타입으로 간주하도록 도와줌
 */
type Person = {
  name: string;
  age: number;
};

// let person:Person = {} // 오류 발생
let person = {} as Person;
person.name = "안수진";
person.age = 28;

type Dog = {
  name: string;
  color: string;
};

// let dog: Dog = {
//   name: "멍멍이",
//   color: "white",
//   breed: "진도", // 초과 프로퍼티로 인한 에러 발생
// };

let dog = {
  name: "멍멍이",
  color: "white",
  breed: "진도",
} as Dog;

/**
 * 타입 단언의 규칙
 * 단언식: 값 as 단언
 * A as B
 * -> A가 B의 슈퍼 타입이거나 서브 타입이어야함/
 */
let num1 = 10 as never;
let num2 = 10 as unknown;
// let num3 = 10 as string; // 오류 -> 교집합이 없기 때문에

/**
 * const 단언 (as const)
 *
 */
let num4 = 10 as const;
let cat = {
  name: "야옹이",
  color: "black",
} as const; // 객체의 모든 프로퍼티가 readonly 처리가 된다. (프로퍼티 값 수정X)

// cat.name = "멍멍이" // 수정 할 수 없다.

/**
 * Non Null 단언 (!)
 *
 */
type Post = {
  title: string;
  author?: string;
};

let post: Post = {
  title: "게시글1",
  author: "안수진",
};

// const len: number = post.author?.length; // undefinded 일 수 있기 때문에 타입 에러 발생
const len: number = post.author!.length; // 값이 null 이나 undefinded 가 아닐꺼라고 타입스크립트가 알려주는 것
