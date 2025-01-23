import { useEffect, useRef, useState, useReducer } from "react";

import Editor from "./components/Editor";
import { Todo } from "./types";
import "./App.css";
import TodoItem from "./components/TodoItem";

type Action =
  | {
      type: "CREATE";
      data: { id: number; content: string };
    }
  | {
      type: "DELETE";
      id: number;
    };

function reducer(state: Todo[], action: Action) {
  switch (action.type) {
    case "CREATE": {
      return [...state, action.data];
    }
    case "DELETE": {
      return state.filter((item) => item.id !== action.id);
    }
  }
}

function App() {
  const idRef = useRef(0);

  const [todos, dispatch] = useReducer(reducer, []);

  const onClickAdd = (text: string) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++,
        content: text,
      },
    });
  };

  const onClickDelete = (id: number) => {
    dispatch({
      type: "DELETE",
      id: id,
    });
  };

  useEffect(() => {
    console.log("todos", todos);
  }, [todos]);

  return (
    <div className="App">
      <h1>TODO</h1>
      <Editor onClickAdd={onClickAdd} />
      <div>
        {todos.map((todo) => (
          <TodoItem key={todo.id} onClickDelete={onClickDelete} {...todo} />
        ))}
      </div>
    </div>
  );
}

export default App;
