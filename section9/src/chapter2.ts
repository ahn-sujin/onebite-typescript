/**
 * infer - 조건부 타입 내에서 타입 추론하기
 */
type FuncA = () => string;

type FuncB = () => number;

// type ReturnType<T> = T extends () => string ? string : never;
type ReturnType<T> = T extends () => infer R ? R : never;

type A = ReturnType<FuncA>;
// type A : string
// type A : string

type B = ReturnType<FuncB>;
// type B : never
// type A : number

type C = ReturnType<number>;

/**
 * 예제
 */

type PromiseUnpack<T> = T extends Promise<infer R> ? R : never;

type PromiseA = PromiseUnpack<Promise<number>>; // number
type PromiseB = PromiseUnpack<Promise<string>>; // string
