/**
 * 타입 변수 응용 첫번째 사례 - 인수
 */
function swap1<T>(a: T, b: T) {
  return [b, a];
}
// const [a1,b1] = swap1(1,"2"); // Error: 인수의 타입이 다른데 동일한 타입 변수로 선언 되어 있기 때문이다.

function swap2<T, U>(a: T, b: U) {
  return [b, a];
}
const [a2, b2] = swap2(1, "2"); // 타입 변수를 여러개 선언해서 사용할 수 있다.

/**
 * 타입 변수 응용 두번째 사례 - 배열
 */
function returnFirstValue1<T>(data: T[]) {
  return data[0];
}
let num1 = returnFirstValue1([1, 2, 3]);
let str1 = returnFirstValue1(["hello", "mynameis"]);

// 첫번째 요소의 타입을 정확히 추론하고 싶을때, 나머지 요소의 타입은 필요없는 경우
function returnFirstValue2<T>(data: [T, ...unknown[]]) {
  return data[0];
}
let num2 = returnFirstValue2([1, 2, 3]);
let str2 = returnFirstValue2([1, "hello", "mynameis"]);

/**
 * 타입 변수 응용 세번째 사례 - 프로퍼티
 *
 * T 를 {length: number} 타입을 갖고 있는 타입으로 제한
 */
function getLength<T extends { length: number }>(data: T) {
  return data.length; // 프로퍼티 length의 값을 반환하는 함수
}
let var1 = getLength([1, 2, 3]); // 3
let var2 = getLength("12345"); // 5
let var3 = getLength({ length: 10 }); // 10
// let var4 = getLength(10); // 타입에러 발생! (legnth를 갖고 있지 않기 때문)
