/**
 * 템플릿 리터럴 타입
 * -> 스트링 리터럴 타입을 기반으로 정해진 문자열만 포함하는 타입
 */

type Color = "red" | "black" | "green";

type Animal = "dog" | "cat" | "chicken";

// ASIS
type ColoredAnimal1 = "red-dog" | "red-cat" | "red-chicken" | "black-dog";

// TOBE
type ColoredAnimal2 = `${Color}-${Animal}`;

const coloredAnimal: ColoredAnimal2 = "green-cat";
