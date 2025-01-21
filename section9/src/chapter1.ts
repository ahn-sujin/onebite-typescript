/**
 * 분산적인 조건부 타입
 * -> 조건부 타입이 분산적으로 동작하게 업그레이드 되는 것
 */
type StringNumberSwitch<T> = T extends number ? string : number;
let a: StringNumberSwitch<number>;
let b: StringNumberSwitch<string>;

// 유니온 타입을 할당하면 분산적 조건부 타입이 된다.
let c: StringNumberSwitch<string | number>;
let d: StringNumberSwitch<boolean | number | string>;

/**
 * 실용적인 예제1
 */
type Exclude<T, U> = T extends U ? never : T;
type A = Exclude<number | string | boolean, string>;
// 1단계
// Exclude<number, string> |
// Exclude<string, string> |
// Exclude<boolean, string>

// 2단계
// number |
// never |
// boolean

// 3단계 : 유니온 타입에 never가 포함되어 있다면 never는 사라지게 된다.
// number | boolean

type Extract<T, U> = T extends U ? T : never;
type B = Extract<number | string | boolean, string>;
// 1단계
// Extract<number,string>
// Extract<string,string>
// Extract<booelan,string>

// 2단계
// never |
// string |
// never

// 3단계
// string

type StringNumberSwitch1<T> = [T] extends [number] ? string : number;
let e: StringNumberSwitch<boolean | number | string>; // number
