import React, { useEffect, useRef, useReducer, useContext } from "react";

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

// Reducer
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

// Context
export const TodoStateContext = React.createContext<Todo[] | null>(null);
export const TodoDispatchContext = React.createContext<{
  onClickAdd: (text: string) => void;
  onClickDelete: (id: number) => void;
} | null>(null);

// 커스텀 훅
export function useTodoDispatch() {
  const dispatch = useContext(TodoDispatchContext);
  if (!dispatch) throw Error("TodoDispatchContext Error!");
  return dispatch;
}

export function App() {
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
      <TodoStateContext.Provider value={todos}>
        <TodoDispatchContext.Provider value={{ onClickAdd, onClickDelete }}>
          <Editor />
          <div>
            {todos.map((todo) => (
              <TodoItem key={todo.id} {...todo} />
            ))}
          </div>
        </TodoDispatchContext.Provider>
      </TodoStateContext.Provider>
    </div>
  );
}

export default App;
