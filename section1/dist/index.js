const a = 1;
export {};
/**
 * [memo]
 * - 타입스크립트에서 모든 파일은 글로벌 모듈(전역 모듈)로 취급받기 때문에,
 * 파일이 다르더라도 중복된 변수를 선언하면 오류가 발생하게 된다.
 * - 해결 방법 1. 파일 내부에 export {} 를 활용한다.
 * - 해결 방법 2. tsconfig.json 파일에서 옵션 설정 한다. "moduleDetection": "force"
 */
