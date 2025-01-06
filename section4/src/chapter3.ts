/**
 * 함수 오버로딩
 * -> 하나의 함수를 매개변수의 개수나 타입에 따라 여러가지 버전으로 정의하는 방법
 * -> 자바스크립트에서는 지원되지 않고 타입스크립트에서만 지원된다.
 */

// 버전 정의: 오버로드 시그니처
function func(a: number): void;
function func(a: number, b: number, c: number): void;

// 실제 구현: 구현 시그니처
function func(a: number, b?: number, c?: number) {
  if (typeof b === "number" && typeof c === "number") {
    console.log(a + b + c);
  } else {
    console.log(a * 20);
  }
}

// func(); error
func(1);
// func(1,2); error
func(1, 2, 3);
