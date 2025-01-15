/**
 * 프로미스와 제네릭
 */

// 성공 했을 떄
const promise1 = new Promise<number>((resolve, reject) => {
  setTimeout(() => {
    resolve(20);
  }, 3000);
});

promise1.then((res) => {
  console.log(res * 10); // 200
});

// 실패 했을 떄
const promise2 = new Promise<number>((resolve, reject) => {
  setTimeout(() => {
    reject("실패했습니다.");
  }, 3000);
});

promise2.catch((err) => {
  if (typeof err === "string") {
    console.log(err);
  }
});

/**
 * 프로미스를 반환하는 함수의 타입을 정의하는 예시
 */
interface Post {
  id: number;
  title: string;
  content: string;
}

function fetchPost(): Promise<Post> {
  return new Promise<Post>((resolve, reject) => {
    setTimeout(() => {
      resolve({
        id: 1,
        title: "게시글 제목",
        content: "게시글 컨텐츠",
      });
    }, 3000);
  });
}

const postRequest = fetchPost();

postRequest.then((res) => {
  res.id; // 1
});
