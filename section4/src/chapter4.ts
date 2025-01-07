/**
 * 사용자 정의 타입가드
 * -> 참 또는 거짓을 반환하는 함수를 이용해 필요에 따라 타입 가드를 만들 수 있도록 하는 타입스크립트 문법이다.
 */

// ASIS
// - 서로소 유니온 타입을 사용하지 못하는 상황이라고 가정했을 때, 다음과 같은 warning 함수는 가독성 면에서 아쉬운 점이 있다.
// - 만약 key name 이 바뀌기라도 한다면 일일 수정해줘야한다.
type Dog = {
  name: string;
  isBark: boolean;
};

type Cat = {
  name: string;
  isScratch: boolean;
};

type Animal = Dog | Cat;

function warning1(animal: Animal) {
  if ("isBark" in animal) {
    // 강아지
  } else if ("isScratch" in animal) {
    // 고양이
  }
}

// TOBE
// - isDog: Dog 타입인지를 확인하는 타입 가드
// - isCat: Cat 타입인지를 확인하는 타입 가드
// - animal is Dog : 이 함수가 true를 반환하면 조건문 내부에서 이 값이 Dog 타입임을 보장한다는 의미이다
function isDog(animal: Animal): animal is Dog {
  return (animal as Dog).isBark !== undefined;
}

function isCat(animal: Animal): animal is Cat {
  return (animal as Cat).isScratch !== undefined;
}

function warning2(animal: Animal) {
  if (isDog(animal)) {
    // 강아지
  } else if (isCat(animal)) {
    // 고양이
  }
}
