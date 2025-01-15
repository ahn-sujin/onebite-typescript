/**
 * 제네릭 인터페이스
 */

interface KeyPair<K, V> {
  key: K;
  value: V;
}

let keyPair1: KeyPair<string, number> = {
  key: "수진",
  value: 29,
};

let keyPair2: KeyPair<boolean, string[]> = {
  key: false,
  value: ["hello", "hi"],
};

/**
 * 인덱스 시그니처
 */

// ASIS : 제네릭 인터페이스 적용 전
interface NumberMap {
  [key: string]: number;
}

let numberMap: NumberMap = {
  key1: -1231,
  key2: 123123,
};

// TOBE: 제네릭 인터페이스 적용 후
interface Map<V> {
  [key: string]: V;
}

let stringMap: Map<string> = {
  key: "value",
};

let booleanMap: Map<boolean> = {
  key: true,
};

/**
 * 제네릭 타입 별칭
 */
type Map2<V> = {
  [key: string]: V;
};

let stringMap2: Map2<string> = {
  key: "hello",
};

/**
 * 제네릭 인터페이스의 활용 예시 (유저 관리 프로그램)
 */
// ASIS : 타입 좁히기를 통해 조건을 검사하는 로직을 하나하나 추가해줘야한다.
interface Student1 {
  type: "student";
  school: string;
}

interface Developer1 {
  type: "developer";
  skill: string;
}

interface User1 {
  name: string;
  profile: Student1 | Developer1;
}

// 학생 유저일 때만 실행되는 함수
function goToSchool1(user: User1) {
  // 타입 좁히기
  if (user.profile.type !== "student") {
    console.log("학생이 아닙니다.");
    return;
  }

  const school = user.profile.school;
  console.log(`${school}로 등교 완료!`);
}

const developerUser1: User1 = {
  name: "안수진",
  profile: {
    type: "developer",
    skill: "Typescript",
  },
};

const studentrUser1: User1 = {
  name: "홍수진",
  profile: {
    type: "student",
    school: "서울대학교",
  },
};

goToSchool1(developerUser1);
goToSchool1(studentrUser1);

// TOBE
interface Student2 {
  type: "student";
  school: string;
}

interface Developer2 {
  type: "developer";
  skill: string;
}

interface User2<T> {
  name: string;
  profile: T;
}

// 학생 유저일 때만 실행되는 함수
function goToSchool2(user: User2<Student2>) {
  const school = user.profile.school;
  console.log(`${school}로 등교 완료!`);
}

const developerUser2: User2<Developer2> = {
  name: "안수진",
  profile: {
    type: "developer",
    skill: "Typescript",
  },
};

const studentrUser2: User2<Student2> = {
  name: "홍수진",
  profile: {
    type: "student",
    school: "서울대학교",
  },
};

// goToSchool2(developerUser2); // error
goToSchool2(studentrUser2);
