/**
 * 타입 추론
 * -> 점진적 타입 시스템 : 타입을 지정하지 않아도 변수를 선언하고 초기값을 넣어주면 초기값을 기준으로 타입을 지정한다.
 * -> 타입 넓히기 : 상수(const)로 선언된 변수가 아니라면 범용적으로 타입이 선언될 수 있도록 추론해주는 것을 말한다.
 */

let a = 10;
let b = "hello";
let c = {
  id: 1,
  name: "asj",
  profile: {
    nickname: "mini",
  },
  urls: ["https://...."],
};

// 객체,배열의 구조분해할당에도 초기값을 기준으로 타입 추론이 잘 적용됨
let { id, name, profile } = c;
let [one, two, three] = [1, "hello", true];

// 함수의 타입 추론은 리턴문에 오는 값을 기준으로 타입 추론
// 매개 변수는 기본값을 기준으로 타입 추론
function func(params = "hello") {
  return "hello";
}

// any 타입의 진화
// -> 변수를 선언하고 초기값을 설정하지 않으면 암묵적인 any 타입이 지정된다.
// -> 변수를 재할당 해줄때 마다 any 타입이 진화한다. (number → string)
let d;

d = 10;
d.toFixed();

d = "hello";
d.toUpperCase();

// const 선언
// -> const 의 경우 리터럴 타입으로 선언된다.
const num = 10;
const str = "hello";

let arr = [1, "string"];
