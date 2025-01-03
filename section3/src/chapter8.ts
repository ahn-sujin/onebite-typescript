/**
 * 서로소 유니온 타입
 * -> 교집합이 없는 타입들로만 만든 유니온 타입을 말함 (string | number)
 */

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

/**
 * [ASIS]
 * 문제점 : 조건문이 어떤 타입인지 알기에 직관적이지 않다. (프로퍼티가 속하는 타입을 하나하나 살펴봐야함)
 */
function login1(user: User) {
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

/**
 * [TOBE]
 * - tag 프로퍼티를 추가한다.
 * - 각각의 tag프로퍼티는 교집합이 있을 수 없기 때문에 각각의 타입에 대해서 조건문 내에서 타입을 좁혀서 사용할 수 있으며 코드를 좀 더 직관적으로 수정할 수 있다.
 */
function login2(user: User) {
  if (user.tag === "ADMIN") {
    console.log(`${user.name}님 현재까지 ${user.kickCount}명 추방했습니다`);
  } else if (user.tag === "MEMBER") {
    console.log(`${user.name}님 현재까지 ${user.point}모았습니다`);
  } else {
    console.log(`${user.name}님 현재까지 ${user.visitCount}번 오셨습니다`);
  }
}

function login3(user: User) {
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

/**
 * 추가 예시 [ASIS]
 * 문제점 : state 값에 따라서 error 또는 response 값이 있을 수도 없을 수도 있기 때문에 옵셔널 체이닝(?) 또는 Non null 단언(!)을 해줘야한다.
 * */
type AsyncTask1 = {
  state: "LOADING" | "FAILED" | "SUCCESS";
  error?: {
    message: string;
  };
  response?: {
    data: string;
  };
};

function processResult1(task: AsyncTask1) {
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

const loading1: AsyncTask1 = {
  state: "LOADING",
};

const failed1: AsyncTask1 = {
  state: "FAILED",
  error: {
    message: "오류 발생 원인은 ~~",
  },
};

const success1: AsyncTask1 = {
  state: "SUCCESS",
  response: {
    data: "데이터 ~~",
  },
};

/** 추가 예시 [TOBE]
 * - state 프로퍼티를 기준으로 타입 분리
 */
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

type AsyncTask2 = LoadingTask | FailedTask | SuccessTask;

function processResult2(task: AsyncTask2) {
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

const loading2: AsyncTask2 = {
  state: "LOADING",
};

const failed2: AsyncTask2 = {
  state: "FAILED",
  error: {
    message: "오류 발생 원인은 ~~",
  },
};

const success2: AsyncTask2 = {
  state: "SUCCESS",
  response: {
    data: "데이터 ~~",
  },
};
