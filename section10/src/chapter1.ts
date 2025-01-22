interface Post {
  title: string;
  tags: string[];
  content: string;
  thumbnailURL?: string;
}

/**
 * Partial<T>
 * -> 부분적인, 일부분의
 * -> 특정 객체 타입의 모든 프로퍼티를 선택적 프로퍼티로 바꿔주는 타입
 */

// Partial 직접 구현
type Partial<T> = {
  [key in keyof T]?: T[key];
};

const draft: Partial<Post> = {
  title: "임시 제목",
  // content: "작성중입니다...",
};

/**
 * Required<T>
 * -> 필수의, 필수적인
 * -> 특정 객체 타입의 모든 프로퍼티를 필수 프로퍼티로 바꿔주는 타입
 */

// Required<T> 직접 구현
type Required<T> = {
  [key in keyof T]-?: T[key];
};

const withThumbnailPost: Required<Post> = {
  title: "삿포로 여행 후기",
  tags: ["travel"],
  content: "",
  thumbnailURL: "https:// ....",
};

/**
 * Readonly<T>
 * -> 읽기전용 수정불가
 * -> 특정 객체 타입에서 모든 프로퍼티를 읽기 전용 프로퍼티로 만들어주는 타입
 */
const readonlyPost: Readonly<Post> = {
  title: "보호된 게시글 입니다.",
  tags: [],
  content: "",
  thumbnailURL: "https:// ....",
};

type Readonly<T> = {
  readonly [key in keyof T]: T[key];
};

// readonlyPost.content = "작성";
