// number
let num1: number = 123;
let num2: number = -123;
let num3: number = 0.123;
let num4: number = -0.123;
let num5: number = Infinity;
let num6: number = -Infinity;
let num7: number = NaN;

// string
let string1: string = "hello";
let string2: string = "hello";
let string3: string = `hello`;
let string4: string = `hello ${num1}`;

// boolean
let bool1: boolean = true;
let bool2: boolean = false;

// null
let null1: null = null;

// undefined
let unde1: undefined = undefined;

// tsconfig.json 에서 strictNullChecks 옵션 설정
let numA: number = null;

// 리터럴 타입 : 값 그 자체가 타입이 되는 타입
// 리터럴 -> 값
let numB: 10 = 10;
let strA: "hello" = "hello";
let boolA: true = true;
