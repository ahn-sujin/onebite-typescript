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
9. [타입은 집합이다](#타입은-집합이다)
10. [타입 계층도와 기본 타입](#타입-계층도와-기본-타입)
11. [객체 타입의 호환성](#객체-타입의-호환성)
12. [대수 타입](#대수-타입)
13. [타입 추론](#타입-추론)
14. [타입 단언](#타입-단언)
15. [타입 좁히기](#타입-좁히기)
16. [서로소 유니온 타입](#서로소-유니온-타입)
17. [함수 타입 정의](#함수-타입-정의)
18. [함수 타입 표현식과 호출 시그니처](#함수-타입-표현식과-호출-시그니처)
19. [함수 타입의 호환성](#함수-타입의-호환성)
20. [함수 오버로딩](#함수-오버로딩)
21. [사용자 정의 타입가드](#사용자-정의-타입가드)

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

<br />

## 타입은 집합이다
<img width="730" alt="스크린샷 2024-08-20 오후 11 11 06" src="https://github.com/user-attachments/assets/a65cfc60-1d37-4c9f-b000-d65eeb4fb04b" />
<img width="730" alt="스크린샷 2024-08-20 오후 11 15 28" src="https://github.com/user-attachments/assets/b92d219c-ab74-4714-9d36-87766aa22bc5" />

- 타입은 동일한 속성과 특징들을 갖는 여러 개의 값들을 모아놓은 집합이다.
- 타입들의 관계는 부모-자식 관계이다.
- 타입간의 업 캐스팅은 가능하지만, 다운 캐스팅은 불가능하다.


<br />


## 타입 계층도와 기본 타입
### Unkown 타입
- 전체 진합
- **모든 타입의 슈퍼타입**
  
```typescript
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

```

### Never 타입
- 공집합, 아무런 값도 저장할 수 없다.
- **모든 타입의 서브타입**

```typescript
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
```

### Void 타입
- 반환값이 없는 타입
- **중간 타입 , undefined 타입의 슈퍼타입**

```typescript
function voidExam() {
  function voidFunc(): void {
    console.log("hello");
    // return undefined;
  }

  let voidVar: void = undefined;
}
```

### any 타입
- 치트키 타입, 타입 계층도를 무시한다.
- **모든 타입의 슈퍼 타입이기도 하고, 모든 타입의 서브 타입이기도 하다. (never 제외)**

```typescript
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
```

<br />

## 객체 타입의 호환성
> 어떤 객체 타입을 다른 객체 타입으로 취급해도 괜찮은가?

```tsx
type Animal = { 
	name: string;
	color: string;
}

type Dog = {
	name: string;
	color: string;
	breed: string;
}

let animal: Animal = {
	name: "기린",
	color: "yellow"
}

let dog: Dog = {
	name: "돌돌이",
	color: "brown",
	breed: "진도"
}

animal = dog;  // 가능

dog = animal; // 불가능
```

- 객체도 슈퍼타입, 서브타입을 가진다
    - **프로퍼티를 기준**으로 그 관계가 결정된다.
- 구조적 타입 시스템
    - Animal 타입은 2개의 프로퍼티 (name, color)
    - Dog 타입은 3개의 프로퍼티 (name, color, breed)
- **조건이 더 적은 타입이 슈퍼타입**이 된다.

### 초과 프로퍼티 검사

```tsx
type Book = {
	name: string
	price: number
}

type ProgrammingBook = {
	name: string
	price: number
	skill: string
}

let book:Book;
let programmingBook : ProgrammingBook = {
	name: "한 입 크기로 잘라먹는 리액트",
	price : 33000,
	skill : "리액트"
}

book = programmingBook

let book2 : Book = {
	name: "한 입 크기로 잘라먹는 리액트",
	price : 33000,
	skill : "리액트"
}
```

- 변수를 초기화할 때  초기화하는 값으로 객체 리터럴을 사용할 때 발동하는게 초과 프로퍼티 검사이다.
    - 타입스크립트의 특수한 기능으로 정의된 프로퍼티 외의 다른 초과된 프로퍼티를 갖는 객체를 변수에 할당할 수 없도록 막는 기능이다.
- 객체 타입에 정의된 프로퍼티만 적어야한다.
- 매개변수를 전달할 때도 동일하게 적용된다.
    
    ```tsx
    function func(book: Book) {}
    
    func({ 
      name: "한 입 크기로 잘라먹는 리액트",
      price: 33000,
      skill: "reactjs", // 오류 발생
    });
    ```
    
    - 객체 리터럴로 전달하면 초과 프로퍼티 검사가 발동한다.
    - 피하려면 정의한 변수에 저장했다가 인수로 변수로 전달해야한다.

<br />

## 대수 타입

- **여러개의 타입을 합성해서 새롭게 만들어낸 타입**이다.
- 합집합 타입과 교집합 타입이 존대한다.

### 합집합 - Union 타입

```tsx
// 1. string-number union 타입
let a : string | number;
a = 1;
a = "hello";

// 2. 배열에서 Union 타입
let arr:(number | string | boolean)[] = [1,"hello", true];

// 3. 객체에서 Union 타입
type Dog = {
	name : string;
	color : string;
}

type Person = {
	name : string;
	language : string;  
}

type Union = Dog | Person;
```

- 추가할 수 있는 유니온 타입은 무한대이다.
- 한쪽에 포함되거나 , 둘다 포함되어야한다. 한쪽에만 포함된다면 그것은 Union 타입이 될 수 없다.

### 교집합 - Intersection 타입

```tsx
let variable : number & string; // nerver 타입 (공집합)

type Dog = {
	name : string;
	color : string;
}

type Person = {
	name : string;
	language : string;  
}

type Intersection = Dog & Person;

let intersection1 : Intersection = {
	name: "",
	color: "",
	language: "" // 하나라도 빠지면 intersection 타입에 포함될 수 없다.
}
```

- 기본 타입들로 Intersection 타입을 만들긴 어렵다. 보통 객체 타입에 많이 사용한다.
- Intersection 타입은 모든 프로퍼티를 갖고 있어야한다.

<br />

## 타입 추론

- 점진적 타입 시스템
    - 타입을 지정하지 않아도 변수를 선언하고 초기값을 넣어주면 **초기값을 기준으로 타입을 지정**한다.
- 모든 상황에 타입을 추론해주진 않는다
    - ex) 함수의 매개변수 같은 경우는 타입추론이 되지 않는다.
- 타입 넓히기
    - 상수(const)로 선언된 변수가 아니라면 범용적으로 타입이 선언될 수 있도록 추론해주는 것

<br/>

```tsx
let a = 10;
let b = "hello";
let c = {
	id : 1,
	name : "asj",
	profile : {
		nickname : "mini"
	},
	urls : ["https://...."]
}

let {id, name, profile} = c;

```

- 객체 또는 배열의 구조분해할당에서도 초기값을 기준으로 타입추론이 잘 적용된다.

<br />

```tsx
function func(params) {
	return "hello";
}
```

- **함수의 타입 추론**을 할 때는 초기값이 아닌 **리턴문에 오는 값을 기준으로 타입이 지정**된다.
- **매개변수가 기본값**이 정해져 있다면 그 기본값(params = “hello”)을 기준으로 타입이 지정된다.
    - 기본값이 없을 경우에는 타입추론이 되지 않는다.
 
<br />

```tsx
let d;

d = 10;
d.toFixed();

d = "hello";
d.toUpperCase();
```

- any 타입의 진화
    - 변수를 선언하고 초기값을 설정하지 않으면 **암묵적인 any 타입**이 지정된다.
    - 변수를 재할당 해줄때 마다 any 타입이 진화한다. (number → string)
 
<br />

```tsx
const num = 10; 
const str = "hello";

let arr = [1, "string"];
```

- **const 의 경우 리터럴 타입**으로 선언이 된다.
    - 예를들어 num같은 경우 number 타입이 아닌 10이라는 타입이 지정된다.
- 초기값이 배열 안에 여러 값이 담아져 있다면 모든 배열의 요소들의 타입을 추론해서 공통 타입으로 추론한다. (union타입 number | string)

<br />

## 타입 단언

> 타입스크립트의 눈을 가리는 격…  항상 조심해서 사용하기!

```tsx
type Person = {
	name : string;
	age : number;
}

let person:Person = {} // 오류 발생
person.name = "안수진";
person.age = 28;

let person = {}
person.name = "안수진"; // 오류 발생
person.age = 28; // 오류 발생

let person = {} as Person

----

type Dog = {
	name : string;
	color : string;
}

let dog  = {
	name : "멍멍이",
	color : "white",
	breed : "진도" // 오류가 발생하지 않음
} as Dog;
```

- 필요한 상황
    - 의도와 다르게  타입이 추론될 때
- as
    - as 앞에 있는 값을 as 뒤에 있는 타입으로 간주하도록 도와줌

### 타입 단언의 규칙

- 단언식 : 값 as 단언
    - A as B
    - A가 B의 **슈퍼타입**이거나 A가 B의 **서브타입**이어여 함

```tsx
let num1 = 10 as never; // O
let num2 = 10 as unknown; // O

let num3 = 10 as string; // 오류 ---> 교집합이 없음

let num4 = 10 as unknown as string; // 꼼수 ---> 다중단언을 하면 통과
```

### const 단언

```tsx
let num4 = 10 as const; // 리터럴 타입

let cat = {
	name : "야옹이",
	color : "black"
} as const; // 객체의 모든 프로퍼티가 readonly 처리가 된다. (프로퍼티 값 수정X)
```

### Non Null 단언

```tsx
type Post = {
	title: string;
	author?: string;
}

let post : Post = {
	title : "졸리다",
	author : "안수진"
}

const len : number = post.author?.length // undefinded 일 수 있기 때문에 타입 에러 발생

const len : number = post.author!.length 
```

- 옵셔널 체이닝: `?`
    - author 값이 없으면 해당 변수 값 자체를 undefinded 로 처리해줌
- None Null 단언 : `!`
    - 값이 null 이나 undefinded 가 아닐꺼라고 타입스크립트가 알려주는것
    

<br />

## 타입 좁히기

- 조건문 등을 이용해 넓은 타입에서 좁은 타입으로 타입을 상황에 따라 좁히는 방법을 이야기한다.

```tsx
function func(value : number | string) {
	if(typeof value === "number") {
		console.log(value.toFixed());
	} else if (typeof value === "string") {
		console.log(value.toUpperCase());
	}
}
```

- 조건문 밖에서는 type error 발생
- 조건문 내에서 좁은 타입으로 타입을 추론해준다.
- **타입 가드** : 조건문내에서 타입의 좁힐 수 있는 역할을 수행하는 것 (**타입을 좁힐 수 있도록 도와주는 역할**)
    - `typeof`  :  타입을 검사
    - `instanceof` : 객체 검사
    - `in` : 값을 검사
 
<br />

```tsx
// ASIS
function func(value : number | string | Date | null) {
	if(typeof value === "number") {
		console.log(value.toFixed());
	} else if (typeof value === "string") {
		console.log(value.toUpperCase());
	} else if (typeof value === "object") {
		console.log(value.getTime())
	}
}

// TOBE
function func(value : number | string | Date | null) {
	if(typeof value === "number") {
		console.log(value.toFixed());
	} else if (typeof value === "string") {
		console.log(value.toUpperCase());
	} else if (value instanceof Date) {
		console.log(value.getTime())
	}
}
```

- null 값은 사용할 수 없다. 타입에러를 발생시킨다.
- A `instanceof` B
    - A라는 값이 **B객체**인지를 묻는다. 반환값은 true or false
 
<br />

```tsx
type Person = {
	name: string;
	age: number;
}

// ASIS
function func(value : number | string | Date | null | Person) {
	if(typeof value === "number") {
		console.log(value.toFixed());
	} else if (typeof value === "string") {
		console.log(value.toUpperCase());
	} else if (value instanceof Date) {
		console.log(value.getTime());
	} else if (value instanceof Person){
		console.log("...");
	}
}

// TOBE
function func(value : number | string | Date | null | Person) {
	if(typeof value === "number") {
		console.log(value.toFixed());
	} else if (typeof value === "string") {
		console.log(value.toUpperCase());
	} else if (value instanceof Date) {
		console.log(value.getTime());
	} else if (value && "age" in value ){
		console.log(`${value.name}은 ${value.age}살 입니다.`);
	}
}
```

- Person은 형식만 참조한다 =  Person은 type이다
- instanceof 의 오른쪽 값은 타입이 올 수 없다.
    - instanceof 은 왼쪽에 오는 값이 오른쪽에 오는 **class**의 인스턴스인지를 확인하는 연산자이다.
- `in` 연산자 뒤에는 null 또는 undefinded 값이 올 수 없다.
    - && 연산자로 value 값이 있는지 확인하기!

<br />

## 서로소 유니온 타입

- **교집합이 없는** 타입들로만 만든 유니온 타입을 말한다.
    - `string | number`

```tsx
type Admin = {
  name: string;
  kickCount: number;
};

type Member = {
  name: string;
  point: number;
};

type Guest = {
  name: string;
  visitCount: number;
};

type User = Admin | Member | Guest;

// ASIS
function login(user: User) {
  if ("kickCount" in user) {
		// Admin
    console.log(`${user.name}님 현재까지 ${user.kickCount}명 추방했습니다`);
  } else if ("point" in user) {
		// Member
    console.log(`${user.name}님 현재까지 ${user.point}모았습니다`);
  } else {
		// Guest
    console.log(`${user.name}님 현재까지 ${user.visitCount}번 오셨습니다`);
  }
}
```

- ASIS의 문제점
    - 다른 사람이 봤을 때 해당 조건문이 어떤 타입인지 알기에 직관적이지 않다. (해당 프로퍼티가 속하는 타입을 하나하나 살펴봐야함)

<br />

```tsx
type Admin = {
  tag: "ADMIN";
  name: string;
  kickCount: number;
};

type Member = {
  tag: "MEMBER";
  name: string;
  point: number;
};

type Guest = {
  tag: "GUEST";
  name: string;
  visitCount: number;
};

type User = Admin | Member | Guest;

// 첫번째 방법
function login(user: User) {
  if (user.tag === "ADMIN") {
    console.log(`${user.name}님 현재까지 ${user.kickCount}명 추방했습니다`);
  } else if (user.tag === "MEMBER") {
    console.log(`${user.name}님 현재까지 ${user.point}모았습니다`);
  } else {
    console.log(`${user.name}님 현재까지 ${user.visitCount}번 오셨습니다`);
  }
}

// 두번째 방법
function login(user: User) {
  switch (user.tag) {
    case "ADMIN": {
      console.log(`${user.name}님 현재까지 ${user.kickCount}명 추방했습니다`);
      break;
    }
    case "MEMBER": {
      console.log(`${user.name}님 현재까지 ${user.point}모았습니다`);
      break;
    }
    case "GUEST": {
      console.log(`${user.name}님 현재까지 ${user.visitCount}번 오셨습니다`);
      break;
    }
  }
}
```

- 각각의 타입에 string linteral 타입의 tag 프로퍼티를 추가한다.
- 각각의 타입은 교집합이 있을 수 없기 때문에 각각의 타입에 대해서 조건문 내에서 타입을 좁혀서 사용할 수 있으며 코드를 좀 더 직관적으로 수정할 수 있다.

<br />

- 추가적인 예시

```tsx
type AsyncTask = {
	state : "LOADING" | "FAILED" | "SUCCESS";
	error?: {
    message: string;
  };
  response?: {
    data: string;
  };
}

function processResult(task: AsyncTask) {
  switch (task.state) {
    case "LOADING": {
      console.log("로딩 중");
      break;
    }
    case "FAILED": {
      console.log(`에러 발생 : ${task.error?.message}`);
      break;
    }
    case "SUCCESS": {
      console.log(`성공 : ${task.response!.data}`);
      break;
    }
  }
}

const loading: AsyncTask = {
  state: "LOADING",
};

const failed: AsyncTask = {
  state: "FAILED",
  error: {
    message: "오류 발생 원인은 ~~",
  },
};

const success: AsyncTask = {
  state: "SUCCESS",
  response: {
    data: "데이터 ~~",
  },
};

```

- state 값에 따라서 error 또는 response 값이 있을 수도 없을 수도 있기 때문에 옵셔널 체이닝 또는 Non null  단언을 해줘야한다.
    - 하지만 이 방법이 안전한 방법은 아니기 때문에 아래와 같이 서로소 유니온 타입을 사용해서 수정할 수 있다.
 
<br />

```tsx
type LoadingTask = {
  state: "LOADING";
};

type FailedTask = {
  state: "FAILED";
  error: {
    message: string;
  };
};

type SuccessTask = {
  state: "SUCCESS";
  response: {
    data: string;
  };
};

type AsyncTask = LoadingTask | FailedTask | SuccessTask;

function processResult(task: AsyncTask) {
  switch (task.state) {
    case "LOADING": {
      console.log("로딩 중");
      break;
    }
    case "FAILED": {
      console.log(`에러 발생 : ${task.error.message}`);
      break;
    }
    case "SUCCESS": {
      console.log(`성공 : ${task.response.data}`);
      break;
    }
  }
}

const loading: AsyncTask = {
  state: "LOADING",
};

const failed: AsyncTask = {
  state: "FAILED",
  error: {
    message: "오류 발생 원인은 ~~",
  },
};

const success: AsyncTask = {
  state: "SUCCESS",
  response: {
    data: "데이터 ~~",
  },
};

```

<br />

## 함수 타입 정의

### 함수를 설명하는 가장 좋은 방법

```tsx
// 함수 선언식
function func(a:number, b: number) : number {
	return a + b
}
```

```tsx
// 화살표 함수
const add =(a:number, b: number) : number => a + b;
```

- 자바스크립트 기준 : 어떤 매개변수를 받고, 어떤 결과값을 반환하는지 이야기한다.
- 타입스크립트 기준 : 어떤 **타입의 매개변수**를 받고 **타입의 결과**값을 반환하는지 이야기한다.

### 함수의 매개변수

```tsx
function introduce(name = "안수진", age?:number) {
		console.log(`name : ${name}`);
		if(typeof age === "number"){ // 타입좁히기 - 타입가드
			console.log(`age : ${age + 1}`);
		}
		
}

introduce("안수진", 162);
introduce("안수진");   // ---> 선택적 매개변수
```

- 기본값을 주면 알아서 타입을 추론해준다.
- 선택적 매개변수 사용시 주의할 점
    - 필수 매개변수 앞에 오면 안된다.

### rest parameter

```tsx
function getSum(...rest : number[]){
	let sum = 0;
	rest.forEach((i) => (sum += i));
	
	return sum;
}

getSum(1,2,3) // 6
getSum(1,2,3,4,5) // 15
```

- rest 매개변수:  함수에 전달한 인수들을 순차적으로 배열에 저장한다.  [자세한 내용](https://reactjs.winterlood.com/4e81b92b-4097-4fd8-8c67-09a7588c94d6#c027776dc2ea440d9867381b8ec296fe)
- 만약 배열의 개수를 정해놓고 싶다면 튜플타입을 사용한다.
    
    ```tsx
    function getSum(...rest : [number, number, number]){
    	let sum = 0;
    	rest.forEach((i) => (sum += i));
    	
    	return sum;
    }
    
    getSum(1,2,3) // 6
    getSum(1,2,3,4,5) // ---> 에러 발생
    ```
    

<br />

## 함수 타입 표현식과 호출 시그니처

### 함수 타입 표현식

```tsx
type Add = (a: number, b:number) => number;

const add:Add = (a,b) => a + b;
```

- **타입 별칭**을 이용해서 **함수의 타입을 정의**할 수 있다.
- 좋은점
    - 중복되는 타입 정의를 줄일 수 있다.
    
    ```tsx
    type Operation = (a: number, b:number) => number;
    
    const add:Operation = (a,b) => a + b;
    const sub:Operation = (a,b) => a - b;
    const mutiply:Operation = (a,b) => a * b;
    const divide:Operation = (a,b) => a / b;
    ```
    
- 타입 별칭 없이도 타입 표현식 만으로도 표현이 가능하다.
    
    ```tsx
    const add:(a: number, b:number) => number = (a,b) => a + b;
    ```
    

### 호출(콜) 시그니처

```tsx
type Operation2 = {
	(a: number, b:number) : number
}

const add2:Operation2 = (a,b) => a + b;
const sub2:Operation2 = (a,b) => a - b;
const mutiply2:Operation2 = (a,b) => a * b;
const divide2:Operation2 = (a,b) => a / b;
```

- **함수 타입을 정의하는 문법**을 말한다.
- 함수 타입 표현식과 동일한 역할을 한다.
- 함수가 객체이기 때문에 **객체**처럼 다룬다. [자세한 내용](https://reactjs.winterlood.com/0f33b159-6b19-433b-8db4-68d6b4a122e0)
- ✚  하이브리드 타입
    - 객체에 프로퍼티를 추가하여 사용할 수 있다.
    - 이 타입이 갖는 변수를 객체로도 쓰고 함수로도 쓸 수 있다.
    
    ```tsx
    type Operation2 = {
    	(a: number, b:number) => number,
    	name: string;
    }
    
    const add2:Operation2 = (a,b) => a + b;
    
    add2();
    add2.name;
    ```
    
<br />

## 함수 타입의 호환성

- 특정 함수 타입을 다른 함수 타입으로 취급해도 괜찮은가를 판단한다.
- 판단 기준
    1. 반환값의 타입이 호환되는가?
    2. 매개변수의 타입이 호환되는가?

### 반환값이 호환되는가?

```tsx
type A = () => number; //number type
type B = () => 10; // number literal type

let a : A = () => 10;
let b : B = () =>10;

a = b // 업 캐스팅  ⭕️
b = a // 다운 캐스팅  ❌
```

- 반환값이 **다운 캐스팅이되면 안된다.**
    - 업 캐스팅은 호환된다

### 매개변수가 호환되는가?

1. ⭐️ 매개변수의 개수가 **같을 때** ⭐️
    
    ```tsx
    type C = (value:number) => void;
    type D = (value:10) => void; 
    
    let c : C = () => {};
    let d : D = () => {};
    
    c = d; // 업 캐스팅 ❌
    d = c; // 다운 캐스팅 ⭕️
    ```
    
    - 매개변수의 타입을 기준으로 함수 타입의 호환성을 판단 할 때는 업 캐스팅이 안되고, 다운 캐스팅이 된다.
        - 반환값의 경우와 반대이다.
    
    ```tsx
    // 슈퍼타입
    type Animal = {
    	name: string;
    }
    
    // 서브 타입
    type Dog = {
    	name: string;
    	color: string;
    }
    
    let animalFunc = (animal: Animal) => {
    	console.log(animal.name);
    };
    
    let dogFunc = (dog: Dog) => {
    	console.log(dog.name);
    	console.log(dog.color);
    }
    
    animalFunc = dogFunc // 업 캐스팅 ❌
    dogFunc = animalFunc // 다운 캐스팅 ⭕️
    
    // animalFunc = dogFunc 
    let testFunc1 = (animal : Animal) => {
    	console.log(animal.name);
    	console.log(animal.color); // 에러 발생 
    }
    
    // dogFunc = animalFunc 
    let testFunc2 = (dog : Dog) => {
    	console.log(dog.name);
    }
    
    ```
    
2. 매개변수의 개수가 **다를 때**
    
    ```tsx
    type Func1  = (a:number, b:number) => void;
    type Func2  = (a:number) => void;
    
    let func1: Func1 = (a,b) => {};
    let func2: Func2 = (a) => {};
    
    func1 = func2; //  2개  <- 1개 ⭕️
    func2 = func1; //  1개  <- 2개 ❌
    ```
    
    - 할당하려고 하는 함수의 매개변수가 더 적을때 만 가능하다.
    - 하지만 매개변수의 타입이 다르면 불가능하다.
    

<br />

## 함수 오버로딩

- 함수를 매개변수의 개수나 타입에 따라 **여러가지 버전으로 정의**하는 방법
    - C언어 예시
        
        ```tsx
        // 매개변수 없음
        void func(){
        	printf("매개변수 없음");
        }
        
        // 매개변수 한개
        void func(int a){
        	printf(a + 20);
        }
        
        // 매개변수 두개
        void func(int a , int a){
        	printf(i + j);
        }
        ```
        
    - 타입스트립트에서만 제공한다. (자바스크립트에서는X)

1. 버전 정의 ⇒ 오버로드 시그니처
    
    ```tsx
    // 버전들 -> 오버로드 시그니처
    function func(a:number) : void;
    function func(a:number, b:number, c:number) : void;
    ```
    
    - 함수 오버로딩을 구현하기 위해서 가장 첫번째로 할 일은 함수의 어떤 버전들이 있는지 알려줘야한다.
        - 함수 구현없이 선언식만 써놓은 것을 **오버로드 시그니처** 라고 부른다.
    
2. 실제 구현부 ⇒  구현 시그니처
    
    ```tsx
    function func() {}
    
    func(); ❌
    func(1); ⭕️
    func(1,2); ❌
    func(1,2,3); ⭕️
    ```
    
    ```tsx
    function func(a:number, b?:number, c?:number){
    	if(typeof b === "number" && typeof c === "number"){
    		console.log(a + b + c);
    	} else {
    		console.log(a * 20);
    	}
    }
    ```
    
    - 구현 내용
        - 하나의 함수 func
        - 모든 매개변수의 타입 number
        - Ver1. 매개변수가 1개 → 이 매개변수에 20을 곱한 값 출력
        - Ver2. 매개변수가 3개 → 이 매개변수들을 다 더한 값 출력
        

<br />

## 사용자 정의 타입가드

- 사용자 정의 타입가드 란?
    - 참 또는 거짓을 반환하는 함수를 이용해 필요에 따라 타입 가드를 만들 수 있도록 하는 타입스크립트 문법

```tsx
type Dog = {
	name: string;
	isBark: boolean;
};

type Cat = {
	name: string;
	isScratch: boolean;
}

type Animal = Dog | Cat;

function warning(animal: Animal){
	if("isBark" in animal) {
		// 강아지
	} else if ("isScratch" in animal){
		// 고양이
	}
}
```

- 서로소 유니온 타입을 사용하지 못하는 상황이라고 가정했을 때, 다음과 같은 warning 함수는 가독성 면에서 아쉬운 점이 있다.
- 만약 key name 이 바뀌기라도 한다면 일일 수정해줘야한다.

```tsx
function isDog(animal: Animal): animal is Dog{
	return (animal as Dog).isBark !== undefined;
}

function isCat(animal: Animal): animal is Cat{
	return (animal as Cat).isScratch !== undefined;
}

function warning(animal: Animal){
	if(isDog(animal)) {
		// 강아지
	} else if (isCat(animal)){
		// 고양이
	}
}
```

- `isDog` Dog 타입인지를 확인하는 타입 가드
- `isCat` Cat 타입인지를 확인하는 타입 가드
- `animal is Dog`
    - 이 함수가 true를 반환하면 조건문 내부에서 이 값이 Dog 타입임을 보장한다는 의미이다.





 
