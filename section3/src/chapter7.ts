/**
 * 타입 좁히기
 * -> 조건문 등을 이용해 넓은 타입에서 좁은 타입으로 타입을 상황에 따라 좁히는 방법
 * -> 타입 가드 : 타입을 좁힐 수 있도록 도와주는 역할(typeof, in)
 */

function func(value: number | string) {
  value;
  // 조건문 밖에서는 에러 발생
  //   value.toFixed();
  //   value.toUpperCase();

  if (typeof value === "number") {
    console.log(value.toFixed());
  } else if (typeof value === "string") {
    console.log(value.toUpperCase());
  }
}

// ASIS-1
function func1(value: number | string | Date | null) {
  if (typeof value === "number") {
    console.log(value.toFixed());
  } else if (typeof value === "string") {
    console.log(value.toUpperCase());
  }
  //   else if (typeof value === "object") {
  //     console.log(value.getTime()); // error!!  -> value 가 null 일 수도 있기 때문에
  //   }
}

// TOBE-1
// - A instanceof B
// : A라는 값이 B객체 인지를 묻는다. 반환값은 true or false
function func2(value: number | string | Date | null) {
  if (typeof value === "number") {
    console.log(value.toFixed());
  } else if (typeof value === "string") {
    console.log(value.toUpperCase());
  } else if (value instanceof Date) {
    console.log(value.getTime());
  }
}

type Person = {
  name: string;
  age: number;
};

// ASIS-2
function func3(value: number | string | Date | null | Person) {
  if (typeof value === "number") {
    console.log(value.toFixed());
  } else if (typeof value === "string") {
    console.log(value.toUpperCase());
  } else if (value instanceof Date) {
    console.log(value.getTime());
  }
  // else if (value instanceof Person){ // error!! -> instanceof 의 오른쪽에 오는 값은 타입이 올 수 없다.
  // 	console.log("...")
  // }
}

// TOBE-2
// - A in B
// : B에 A의 값이 있는지 확인 한다. 반환값은 true or false
function func4(value: number | string | Date | null | Person) {
  if (typeof value === "number") {
    console.log(value.toFixed());
  } else if (typeof value === "string") {
    console.log(value.toUpperCase());
  } else if (value instanceof Date) {
    console.log(value.getTime());
  } else if (value && "age" in value) {
    // in 연산자 뒤에는 null 또는 undefinded 값이 올 수 없다.
    console.log(`${value.name}은 ${value.age}살 입니다.`);
  }
}
