/**
 * 조건부 타입
 * -> 조건에 따라서(삼항연산자 이용) 타입을 결정하는 문법
 */

type A = number extends string ? string : number;

type ObjA = {
  a: number;
};

type ObjB = {
  a: number;
  b: number;
};

type B = ObjB extends ObjA ? number : string; // number

/**
 * 제네릭과 조건부 타입
 */
type StringNumberSwitch<T> = T extends number ? string : number;

let varA: StringNumberSwitch<number>; // string

let varB: StringNumberSwitch<string>; // number

// ASIS 공백을 제거하는 함수
function removeSpaces1(text: string | null | undefined) {
  // 타입 좁히기
  if (typeof text === "string") {
    return text.replaceAll(" ", "");
  } else {
    return undefined;
  }
}

let result1 = removeSpaces1("hi im sujin");
// result1.toUpperCase(); // result가 undefined가 될 수 있기 때문에 error 발생

// TOBE 공백을 제거하는 함수
function removeSpaces2<T>(text: T): T extends string ? string : undefined;
function removeSpaces2(text: any) {
  // 타입 좁히기
  if (typeof text === "string") {
    return text.replaceAll(" ", "");
  } else {
    return undefined;
  }
}
let result2 = removeSpaces2("hi im sujin");
result2.toUpperCase();
