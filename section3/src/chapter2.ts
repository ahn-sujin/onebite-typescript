/**
 * 1. Unknown 타입
 * - 모든 타입의 슈퍼 타입 (제일 위)
 */
function unknownExam() {
  let a: unknown = 1;
  let b: unknown = "hello";
  let c: unknown = true;
  let d: unknown = null;
  let e: unknown = undefined;

  let unkownVar: unknown;

  // Error : 다운 캐스팅 불가
  //   let num: number = unkownVar;
  //   let str: string = unkownVar;
  //   let bool: boolean = unkownVar;
}

/**
 * 2. Never 타입
 * - 모든 타입의 서브 타입 (공집합, 제일 아래)
 */
function neverExam() {
  function neverFunc(): never {
    while (true) {}
  }

  let num: number = neverFunc();
  let str: string = neverFunc();
  let bool: boolean = neverFunc();

  // Error : 다운 캐스팅 불가능
  //   let num: never = 10;
  //   let str: never = "hello";
  //   let bool: never = true;
}

/**
 * 3. Void 타입
 * - undefined 의 슈퍼 타입
 */
function voidExam() {
  function voidFunc(): void {
    console.log("hello");
    // return undefined;
  }

  let voidVar: void = undefined;
}

/**
 * 4. any 타입
 * - 치트키 타입, 모든 타입의 슈퍼 타입이 될 수도 있고 모든 타입의 서브 타입이 될 수도 있다. (단, never 제외)
 */
function anyExam() {
  let unknownVar: unknown;
  let anyVar: any;
  let undefinedVar: undefined;
  let neverVar: never;

  // 다운 캐스팅이지만 허용된다.
  anyVar = unknownVar;
  undefinedVar = anyVar;

  // 예외) never 타입에는 어떤 타입도 다운 캐스팅 할 수 없다!
  // neverVar = anyVar;
}
