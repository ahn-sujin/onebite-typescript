// void
// 아무것도 없음을 의미하는 타입

function func1(): string {
  return "hello";
}

function func2(): void {
  console.log("hello"); // 반환값이 없음을 의미한다.
}

// never
// 불가능한 타입

// 무한루프
function func3(): never {
  while (true) {}
}

// 에러가 발생하면 중지
function func4(): never {
  throw new Error();
}
