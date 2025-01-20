/**
 * 인덱스드 엑세스 타입
 * -> 객체, 배열, 튜플 타입에서 특정 프로퍼티 혹은 요소의 타입을 추출하는 타입
 */

// 1. 객체
interface Post {
  title: string;
  content: string;
  author: {
    id: number;
    name: string;
    age: number;
  };
}

function printAuthorInfo1(author: Post["author"]) {
  console.log(`${author.name}-${author.id}`);
}

const post1: Post = {
  title: "게시글 제목",
  content: "게시글 본문",
  author: {
    id: 1,
    name: "안수진",
    age: 28,
  },
};

// 2. 배열
type PostList = {
  title: string;
  content: string;
  author: {
    id: number;
    name: string;
    age: number;
  };
}[];

function printAuthorInfo2(author: PostList[number]["author"]) {
  console.log(`${author.name}-${author.id}`);
}

const post2: PostList[number] = {
  title: "게시글 제목",
  content: "게시글 본문",
  author: {
    id: 1,
    name: "안수진",
    age: 28,
  },
};

// 3. 튜플
type Tup = [number, string, boolean];

type Tup0 = Tup[0];
{
  /* number  */
}

type Tup1 = Tup[1];
{
  /* string  */
}

type Tup2 = Tup[2];
{
  /* boolean  */
}

// type Tup3 = Tup[3];  {/* type error : 존재하지 않음 */}

// Tup 타입의 최적의 공통 타입을 뽑아옴
type TupNum = Tup[number];
{
  /* number | string | boolean */
}
