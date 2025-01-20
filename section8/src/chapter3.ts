/**
 * 맵드 타입
 * -> 기존 객체 타입으로부터 새로운 타입을 만드는 타입
 */
interface User {
  id: number;
  name: string;
  age: number;
}

// 1. 선택적 프로퍼티 설정
type PartialUser = {
  [key in "id" | "name" | "age"]?: User[key];
  // keyof 연산자 활용 예시
  // [key in keyof User]?: User[key];
};

// 2. 불리언 프로퍼티 설정
type BooleanUser = {
  [key in keyof User]: boolean;
};

// 3. readonly 프로퍼티 설정 (수정 불가능)
type ReadonlyUser = {
  readonly [key in keyof User]: User[key];
};

// 한명의 유저 정보를 불러오는 기능
function fetchUser(): User {
  // ... 기능

  return {
    id: 1,
    name: "안수진",
    age: 28,
  };
}

// 한명의 유저 정보를 수정하는 기능
function updateUser(user: PartialUser) {
  // ... 수정하는 기능
}

updateUser({ age: 29 });
