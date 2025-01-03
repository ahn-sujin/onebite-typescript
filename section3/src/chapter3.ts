/**
 * 기본 타입간의 호환성
 *
 */
let num1: number = 10;
let num2: 10 = 10;

num1 = num2;

/**
 * 객체 타입간의 호환성
 * -> 어떤 객체 타입을 다른 객체 타입으로 취급해도 괜찮은가?
 */
type Animal = {
  name: string;
  color: string;
};

type Dog = {
  name: string;
  color: string;
  breed: string;
};

let animal: Animal = {
  name: "기린",
  color: "yellow",
};

let dog: Dog = {
  name: "돌돌이",
  color: "brown",
  breed: "진도",
};

// animal = dog; // 가능 (업 캐스팅)
// dog = animal; // 불가능 (다운 캐스팅)

type Book = {
  name: string;
  price: number;
};

type ProgrammingBook = {
  name: string;
  price: number;
  skill: string;
};

let book: Book;

let programmingBook: ProgrammingBook = {
  name: "한 입 크기로 잘라먹는 리액트",
  price: 33000,
  skill: "리액트",
};

book = programmingBook;
// programmingBook = book; // 불가능

/**
 * 초과 프로퍼티 검사
 * -> 초기화 값으로 객체 리터럴을 사용할 때 발생하는 것이 초과 프로퍼티 검사
 */
let book2: Book = {
  name: "한 입 크기로 잘라먹는 리액트",
  price: 33000,
  // skill : "리액트" // 초과 프로퍼티 검사
};

function func(book: Book) {}

func({
  name: "한 입 크기로 잘라먹는 리액트",
  price: 33000,
  // skill: "reactjs", // 오류 발생
});

func(programmingBook); // 객체 리터럴로 전달X , 변수에 저장했다가 인수로 그 변수를 전달 해야 오류가 발생하지 않음
