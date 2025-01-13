/**
 * 제네릭
 * -> 함수, 인터페이스, 타입 별칭, 클래스 등을 다양한 타입과 함께 동작하도록 만들어 주는 타입스크립트의 기능
 * 제네릭 함수
 * -> 제네릭 함수는 두루두루 모든 타입의 값을 다 적용할 수 있는 범용적인 함수
 */

// 제네릭 함수 기본 형식
function func<T>(value: T): T {
  return value;
}

let num = func(10);
let bool = func(true);
let str = func("hello");

// 타입 변수에 타입을 미리 지정해 놓을 수 있다.
let arr = func<[number, number, number, number]>([1, 2, 3, 4]);
