// enum 타입 (열거형 타입)
// 여러가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입

// ASIS
// const user1 = {
//   name: "안수진",
//   role: 0, // 0 관리자
// };

// const user2 = {
//   name: "홍수진",
//   role: 1, // 1 일반 유저
// };

// const user3 = {
//   name: "아무개",
//   role: 2, // 2 게스트
// };

// TOBE
// 숫자형 enum
enum Role {
  ADMIN,
  USER,
  GUEST,
}
// 문자형 enum
enum Language {
  korean = "ko",
  english = "en",
}

const user1 = {
  name: "안수진",
  role: Role.ADMIN, // 0 관리자
  language: Language.korean,
};

const user2 = {
  name: "홍수진",
  role: Role.USER, // 1 일반 유저
};

const user3 = {
  name: "아무개",
  role: Role.GUEST, // 2 게스트
};

console.log(user1, user2, user3);
