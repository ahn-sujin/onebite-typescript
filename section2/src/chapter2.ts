// 배열
let numArr: number[] = [1, 2, 3];
let strArr: string[] = ["hello", "im", "sujin"];
let boolArr: Array<boolean> = [true, false, true];

// 배열에 들어가는 요소들의 타입이 다양할 경우
let multiArr: (string | number)[] = [1, "hello"];

// 다차원 배열의 타입을 정의하는 방법
let doubleArr: number[][] = [
  [1, 2, 3],
  [4, 5],
];

// 튜플 (타입스크립트에만 존재) : 길이와 타입이 고정된 배열
let tup1: [number, number] = [1, 2];
let tup2: [number, string, boolean] = [1, "2", true];

// [주의] 튜플에서 배열 매서드를 사용할 때는 길이 제한이 제대로 작동하지 않기 때문에 유의해서 사용해야한다.
tup1.push(1);
tup1.pop();
tup1.pop();

// 인덱스에 위치에 따라서 값이 정해져 있을 때 튜플 타입을 유용하게 사용할 수 있다.
const users: [string, number][] = [
  ["안수진", 10],
  ["이수진", 20],
  ["김수진", 30],
  ["박수진", 40],
  // [50, "홍수진"] // error
];
