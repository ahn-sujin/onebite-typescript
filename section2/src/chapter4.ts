// 타입 별칭
type User = {
  id: number;
  name: string;
  nickname: string;
  birth: string;
  location: string;
};

let user1: User = {
  id: 1,
  name: "안수진",
  nickname: "asj",
  birth: "1997.08.29",
  location: "수원",
};

let user2: User = {
  id: 2,
  name: "김수진",
  nickname: "ksj",
  birth: "1987.08.29",
  location: "서울",
};

// 인덱스 시그니처
type ContryCodes = {
  [key: string]: string;
};
let contryCodes: ContryCodes = {
  Korea: "ko",
  UnitedState: "us",
  UnitedKingdom: "uk",
};

type ContryNumberCodes = {
  [key: string]: number;
  Korea: number; // 필수 값
};
let contryNumberCodes: ContryNumberCodes = {
  Korea: 410,
  UnitedState: 840,
  UnitedKingdom: 826,
};
