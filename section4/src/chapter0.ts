/**
 * 함수 선언식의 타입 정의
 */

// 함수를 설명하기 좋은 방법
// 1. 자바스크립트 기준 : 어떤 매개변수를 받고, 어떤 결과값을 반환하는지 이야기한다.
// 2. 타입스크립트 기준 : 어떤 타입의 매개변수를 받고 타입의 결과값을 반환하는지 이야기한다.
function func(a: number, b: number) {
  return a + b;
}

/**
 * 화살표 함수의 타입을 정의
 */
const add = (a: number, b: number) => a + b;

/**
 * 함수의 매개 변수
 * - 선택적 매개 변수 (?) : 필수 매개변수 앞에 오면 안된다.
 */
function introduce(name = "안수진", age?: number) {
  console.log(`name : ${name}`);
  if (typeof age === "number") {
    // 타입좁히기 - 타입가드
    console.log(`age : ${age + 1}`);
  }
}
introduce("안수진", 162);
introduce("안수진"); // ---> 선택적 매개변수

/**
 * rest parameter (나머지 매개 변수)
 * - 함수에 전달한 인수들을 순차적으로 배열에 저장한다.
 * - 만약 배열의 개수를 정해 놓고 싶다면 튜플 타입을 사용한다 ...rest : [number, number, number]
 */
function getSum(...rest: number[]) {
  let sum = 0;
  rest.forEach((i) => (sum += i));

  return sum;
}

getSum(1, 2, 3); // 6
getSum(1, 2, 3, 4, 5); // 15
