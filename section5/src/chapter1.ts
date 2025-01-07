/**
 * 인터페이스 확장
 */

// [ASIS]
// - 중복되는 프로퍼티가 너무 많다. 비효율적
interface Animal1 {
  name: string;
  age: number;
}

interface Dog1 {
  name: string;
  age: number;
  isBark: boolean;
}

interface Cat1 {
  name: string;
  age: number;
  isScratch: boolean;
}

interface Chicken1 {
  name: string;
  age: number;
  isFly: boolean;
}

// [TOBE]
// - extends : 확장 및 상속, 다른 인터페이스로부터 해당 인터페이스가 가지고 있는 모든 프로퍼티들을 자동으로 포함하도록 한다.
interface Animal2 {
  name: string;
  age: number;
}

interface Dog2 extends Animal2 {
  isBark: boolean;
}

interface Cat2 extends Animal2 {
  isScratch: boolean;
}

interface Chicken2 extends Animal2 {
  isFly: boolean;
}

// 다중 확장
interface DogCat extends Dog2, Cat2 {}

const dogCat: DogCat = {
  name: "",
  age: 0,
  isBark: true,
  isScratch: true,
};
