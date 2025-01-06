/**
 * 함수 타입의 호환성
 * -> 특정 함수 타입을 다른 함수 타입을 취급해도 괜찮은가를 판단한다.
 *
 * [판단 기준]
 * 1. 반환값의 타입이 호환되는가?
 * 2. 매개변수의 타입이 호환되는가?
 */

// 1. 반환값이 호환되는가?
type A = () => number; //number type
type B = () => 10; // number literal type

let a: A = () => 10;
let b: B = () => 10;

a = b; // 업 캐스팅
// b=a; // Error: 다운 캐스팅

// 2. 매개변수가 호환되는가?
// 2-1. 매개변수의 개수가 같을 때
type C = (value: number) => void;
type D = (value: 10) => void;

let c: C = (value) => {};
let d: D = (value) => {};

// c = d; // Error : 업 캐스팅 -> 매개변수의 타입을 기준으로 함수 타입의 호환성을 타입할 때는 업캐스팅이 불가능하다.
d = c; // 다운 캐스팅

// 슈퍼타입
type Animal = {
  name: string;
};
// 서브 타입
type Dog = {
  name: string;
  color: string;
};

let animalFunc = (animal: Animal) => {
  console.log(animal.name);
};

let dogFunc = (dog: Dog) => {
  console.log(dog.name);
  console.log(dog.color);
};

// animalFunc = dogFunc; // Error : 업 캐스팅
dogFunc = animalFunc;

// animalFunc = dogFunc 경우
let testFunc1 = (animal: Animal) => {
  console.log(animal.name);
  // console.log(animal.color); // 에러 발생
};

// dogFunc = animalFunc 경우
let testFunc2 = (dog: Dog) => {
  console.log(dog.name);
};

// 2-2. 매개변수의 개수가 다를 때
// - 할당하려고 하는 함수의 매개변수가 더 적을 때만 가능하다.
// - 단, 매개변수의 타입이 다르다면 개수에 상관없이 불가능하다.
type Func1 = (a: number, b: number) => void;
type Func2 = (a: number) => void;

let func1: Func1 = (a, b) => {};
let func2: Func2 = (a) => {};

func1 = func2; //  2개  <- 1개
// func2 = func1; //  error: 1개  <- 2개
