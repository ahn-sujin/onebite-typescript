/**
 * Exclude<T,U>
 * -> 제외하다, 추방하다
 * -> T에서 U를 제거하는 타입
 */
type A = Exclude<string | boolean, boolean>;

type Exclude<T, U> = T extends U ? never : T;

/**
 * Extract<T,U>
 * -> T에서 U를 추출
 */
type B = Extract<string | boolean, boolean>;

type Extract<T, U> = T extends U ? T : never;

/**
 * ReturnType<T>
 * -> 함수의 반환값 타입을 추출하는 타입
 */
function funcA() {
  return "hello";
}

function funcB() {
  return 10;
}

type ReturnType<T extends (...arg: any) => any> = T extends (
  ...arg: any
) => infer R
  ? R
  : never;

type ReturnA = ReturnType<typeof funcA>; // string
type ReturnB = ReturnType<typeof funcB>; // number
