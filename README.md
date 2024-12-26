# 💻 TypeScript
- 해당 저장소는 [한 입 크기로 잘라먹는 타입스크립트](https://www.inflearn.com/course/%ED%95%9C%EC%9E%85-%ED%81%AC%EA%B8%B0-%ED%83%80%EC%9E%85%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8) 강의를 바탕으로 Typescript에서 자주 사용하는 개념, 문법에 대해 정리한 저장소입니다.

## 목차
1. [기본 타입](#기본-타입)
2. [원시 타입](#원시-타입)
3. [배열과 튜플](#배열과-튜플)
4. [객체](#객체)
5. [타입 별칭과 인덱스 시그니처](#타입-별칭과-인덱스-시그니처)
6. [Enum 타입](#Enum-타입)
7. [Any와 Unknown 타입](#Any와-Unknown-타입)
8. [Void 타입과 Never 타입](#Void-타입과-Never-타입)

<br />

## 기본 타입
<img width="952" alt="계층도" src="https://github.com/user-attachments/assets/b08d4ebd-c6d0-4a4e-8eef-df3c20748301" />


- 타입스크립트가 자체적으로 제공하는 타입
- 각각의 타입들은 부모와 자식관계를 이룸

<br />

## 원시 타입

- 동시에 하나의 값만 저장하는 타입
- number, string, boolean, null, undefined
- 타입 주석 (type annotation)
    - 변수를 선언하고 **콜론(:) 과 변수를 정의**할 수 있는 값의 유형을 기입한다.
        
        ```tsx
        let n : number;
        ```
        
- 타입이 지정되었을 때, 임시로 null이 필요한 경우`tsconfig.json`파일에서 설정해줄 수 있다.
    
    ```json
    strict: true
    strictNullChecks : false
    ```
    
    - `strictNullChecks` 가 false 면 임시로 null 값을 넣을 수 있다.
    - `strict` 는 `strictNullChecks`의 상위 개념으로 `strictNullChecks` 값은 따로 지정하지 않으면 기본적으로  `strict` 값을 따라간다.
- 리터럴 타입
    - 값 자체가 타입이 되는 타입
        
        ```tsx
        let numA : 10  = 10;
        let strA : "hello" = hello;
        let boolA : true = true;
        ```
<br />        

## 배열과 튜플

### 배열

- 배열 정의 방법
    
    ```tsx
    let numArr: number[] = [1,2,3];
    let boolArr: Array<boolean> = [true, false, true];
    ```
    
- 배열에 들어가는 요소들의 타입이 다양할 경우 (유니온 타입)
    
    ```tsx
    let mutiArr: (number | string)[] = [1, "hello"];
    ```
    
- 다차원 배열의 타입을 정의하는 방법
    
    ```tsx
    let doubleArr: number[][] = [
    	[1,2,3],
    	[4,5]
    ];
    ```
    

### 튜플

- 자바스크립트에는 존재하지 않고 타입스크립트에만 존재한다.
- **길이와 타입이 고정된 배열**
    
    ```tsx
    let tup1:[number,number] = [1,2];
    
    let tup2:[number, string, boolean] = [1,"2",true];
    ```
    
- 배열 메서드를 사용할 때는 길이 제한이 제대로 작동하지 않기 때문에 이 점 유의해서 사용해야한다.
- 인덱스에 위치에 따라서 값이 정해져 있을 때 유용하게 사용할 수 있다.
    
    ```tsx
    const users:[string, number][] = [
    	["안수진", 26],
    	["홍수진", 28],
    	[30, "아무개"] // 에러 발생
    ]
    ```
<br />    

## 객체

### 객체 리터럴 타입

```tsx
let user : {id:number, name:string} = {
	id:1,
	name:"안수진
}
```

- 객체의 타입을 지정할 때는 `object`를 사용하지 않고(프로퍼티나 메서드에 접근하면 오류가 발생함) 객체 리터럴 타입을 사용한다.
    - 객체 리터럴이란 중괄호`{}`  를 사용하여 객체를 생성하고 이 안에 `키-값`의 쌍을 이루어 정의한느 것을 말한다.
- 객체의 구조를 기준으로 타입을 정의하는 것
    - **구조적 타입 시스템(property based type system)**   `← 타입스크립트에서 사용`
- 이름만을 기준으로 타입을 정의하는 것
    - **명목적 타입 시스템**

### 선택적(optional) 프로퍼티

```tsx
let user: {
	id?: number,
	name: string
} = {
	id: 1,
	name: "안수진
}
```

- 있어도 되고 없어도 되는 프로퍼티에는 `?`  를 붙여준다.

### 읽기 전용 프로퍼티 readonly

```tsx
let config : {
	readonly apiKey: string;
} = {
	apiKey :"MY API KEY",
};
```

- 값이 절대 바뀌면 안되는 경우에는 해당 프로퍼티 앞에 readonly 를 붙여준다.

<br />

## 타입 별칭과 인덱스 시그니처

### 타입 별칭

```tsx
type User = {
	id: number;
	name: string;
	nickname: string;
};

let user1 : User = {
	id:1,
	name: "안수진",
	nickname: "asj"
};

let user2 : User = {
	id:2,
	name: "홍수진",
	nickname: "hsj"
};
```

- 반복되는 타입 객체가 나타날 때 사용할 수 있다.
- 주의할 점
    - **동일한 스코프에 중복된 타입 별칭을 선언하면 오류가 발생**한다.
    - 자바스크립트에서는 컴파일시 타입 별칭한 부분은 사라진다.

### 인덱스 시그니처

```tsx
type ContryCodes = {
	[key: string]: string;
}

let contryCodes : ContryCodes = {
	Korea : "ko",
	UnitedState: "us",
	UnitedKingdom : "uk",
}

type ContryNumberCodes = {
	[key: string]: number;
}

let contryNumberCodes : ContryNumberCodes = {
	Korea : 410,
	UnitedState: 840,
	UnitedKingdom : 826,
}
```

- key와 value의 규칙을 기준으로 객체의 타입을 정의할 수 있는 문법이다.
- 주의할 점
    - 규칙을 위반하지 않으면 모두 허용한다. (ex) 빈객체도 허용한다.)
    - 필수 값을 지정할 수 있다.
        
        ```tsx
        type ContryNumberCodes = {
        	[key: string]: number;
        	 Korea:number
        }
        
        let contryNumberCodes : ContryNumberCodes = {
        	Korea : 410,
        	UnitedState: 840,
        	UnitedKingdom : 826,
        }
        ```
        
    - 추가적인 프로퍼티 value 타입이 인덱스 시그니처의 value 타입과 같아야한다.
        
        ```tsx
        type ContryNumberCodes = {
          [key: string]: number;
          Korea: string; // 인덱스 시그니처의 value 값과 달라서 오류 발생! 
        };
        
        let contryNumberAndStringCodes: ContryNumberCodes = {
          Korea: "ko",
          UnitedState: 840,
          UnitedKingdom: 826,
        };
        ```
<br />

## Enum 타입

- 자바스크립트에는 없고 타입스크립트에만 있음
- **여러가지 값 들에 각각 이름을 부여**해 열거해두고 사용하는 타입
    - 여러 상수 값을 묶어서 사용할 수 있다.

```tsx
const user1 = {
	name:"안수진",
	role: 0 // 0 관리자
}

const user2 = {
	name:"홍수진",
	role: 1 // 1 일반 유저
}

const user3 = {
	name:"아무개",
	role: 2 // 2 게스트
}
```

```tsx
// 숫자형 Enum
enum Role {
	ADMIN = 0,
	USER = 1,
	GUEST = 2
}

// 문자형 Enum
enum Language {
	korean : "ko",
	english : "en",
}

const user1 = {
	name:"안수진",
	role: Role.ADMIN
	language: Language.korean
}

const user2 = {
	name:"홍수진",
	role: Role.USER,
	language: Language.korean
}

const user3 = {
	name:"아무개",
	role: Role.GUEST,
	language: Language.english
}
```

- 값을 할당하지 않아도 0 부터 자동으로 할당 된다.
    
    ```tsx
    enum Role {
    	ADMIN,  // 0
    	USER,   // 1
    	GUEST   // 2
    }
    ```
    
- 10부터 할당한다고 했을 때 아래로 내려갈 때 순차적으로 번호가 매겨진다.
    
    ```tsx
    enum Role {
    	ADMIN,  // 9
    	USER = 10,   // 10
    	GUEST   // 11
    }
    ```
    
- 좋은점
    - 작업할 때 헷갈리지 않고 정의할 수 있다.
- **enum은 자바스크립트 컴파일 결과 사라지지 않는다.**
    - 자바스크립트의 객체로 변환된다.

<br />

## Any와 Unknown 타입

- 타입스크립트에만 존재

### any

```tsx
let anyVar: any = 10;
anyVar = "hello";

anyVar = true;
anyVar = {};
anyVar = () =>{};

anyVar.toUpperCase();

let num: number = 10;
num = anyVar;
```

- 특정 변수의 타입을 확실이 모를때 사용한다.
- 어떤 타입이든지 넣을 수 있다는 것을 의미한다.
    - 모든 타입의 값을 할당받고 할당 할 수 있다.
- 치트키
    - 타입검사를 통과하지만 런타임 에러가 발생할 수 있다. 타입스크립트의 장점을 활용하지 못한다는 것을 의미한다. (최대한 사용 지양)

### unknown

```tsx
let unknowVar : unknown;

 unknownVar = "";
 unknownVar = 1;
 unknownVar = () => {};
 
 let num: number = 10;
 num = unknownVar // error
```

- any와 마찬가지로 모든 타입을 허용하지만 any보다는 더 안전한 타입이다.
- any와 다르게 **모든 타입의 값에 unknown 타입의 값을 넣을 수 없다.**
    - number 타입 값에 unknown 타입 값을 넣을 수 없다는 것을 의미한다.
    - **타입 정제**가 필요하다.
        
        ```tsx
        if(typeof unknowVar === "number") {
        	num = unknowVar;
        }

       ```

<br />

## Void 타입과 Never 타입

### void

- 아무것도 없음을 의미하는 타입

```tsx
function func1(): string {
	return "hello";
}

function func2(): void {
	console.log("hello");  // 반환값이 없음을 의미한다.
}
```

- void 타입을 지정하면 그 값에는 아무것도 넣을 수 없다.
    - 단, tsconfig.json 파일에서 `strictNullChecks:false` 로 설정하면 void 타입으로 지정한 값에 null 값을 넣을 수 있다.
- 반환 값이 없고 , return 문을 사용하고 싶지 않은 함수의 경우에 void를 사용한다.
    - undefind 또는 null 타입의 경우에는 실제 그 함수가 return 값으로 undefind 또는 null을 반환해서 타입을 지정할 수 있다.

### never

- 존재하지 않는 불가능한 타입 (모순)

```tsx
// 무한루프
function func3() : never {
	while (true) {} 
}

// 에러가 발생하면 중지
function func4() : never {
	throw new Error();	
}
```

- 무한루프이기 때문에 반환값이 절대 존재할 수 없는 경우 (함수가 종료되지 않음)
    - void의 경우는 함수 자체는 종료되지만, 반환 값이 없는 경우
- 변수의 타입으로 never을 지정하면 그 어떤 값도 넣을 수 없다.
    - undefinded 도 안되고, null 도 안됨, any도 안됨
    - `strictNullChecks:false` 설정해줘도 안됨
