/**
 * map, forEach 메서드 타입 정의하기
 */

// 1. map 메서드
const arr = [1, 2, 3];

// [ASIS]
function map1<T>(arr: T[], callback: (item: T) => T) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(callback(arr[i]));
  }

  return result;
}
map1(arr, (it) => it * 2);
// map1(["hi","hello"], (it) => parseInt(it)); // error : 선언된 타입이 T로 통일, 콜백함수의 반환값의 타입이 number타입이 됨

// [TOBE]
function map2<T, U>(arr: T[], callback: (item: T) => U) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(callback(arr[i]));
  }

  return result;
}

map2(arr, (it) => it * 2);
map2(["hi", "hello"], (it) => parseInt(it));

// 2. forEach 메서드
const arr2 = [1, 2, 3];

function forEach<T>(arr: T[], callback: (item: T) => void) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i]);
  }
}

forEach(arr2, (it) => {
  console.log(it.toFixed()); // number
});

forEach(["hi", "hello"], (it) => {
  console.log(it); // string
});
