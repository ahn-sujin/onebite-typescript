/**
 * 함수 타입 표현식
 * - 타입 별칭을 이용해서 함수의 타입을 정의할 수 있다.
 */
type Operation = (a: number, b: number) => number; // 타입 별칭

const add: Operation = (a, b) => a + b;
const sub: Operation = (a, b) => a - b;
const mutiply: Operation = (a, b) => a * b;
const divide: Operation = (a, b) => a / b;

/**
 * 호출(콜) 시그니처
 * - 함수 타입 표현식과 동일한 역할을 한다.
 */
type Operation2 = {
  (a: number, b: number): number;
  name: string; // [심화]하이브리드 타입 : 객체에 프로퍼티를 추가하여 사용할 수 있다.
};

const add2: Operation2 = (a, b) => a + b;
const sub2: Operation2 = (a, b) => a - b;
const mutiply2: Operation2 = (a, b) => a * b;
const divide2: Operation2 = (a, b) => a / b;

// 이 타입이 갖는 변수를 함수로도 쓰고, 객체로도 쓸 수 있다.
add2(1, 22);
add2.name;
