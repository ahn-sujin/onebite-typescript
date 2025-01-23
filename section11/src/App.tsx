import { useEffect, useRef, useState } from "react";

import Editor from "./components/Editor";
import "./App.css";

interface Todo {
  id: number;
  content: string;
}

function App() {
  const idRef = useRef(0);

  const [todos, setTodos] = useState<Todo[]>([]);

  const onClickAdd = (text: string) => {
    setTodos([...todos, { id: idRef.current++, content: text }]);
  };

  useEffect(() => {
    console.log("todos", todos);
  }, [todos]);

  return (
    <div className="App">
      <h1>TODO</h1>
      <Editor onClickAdd={onClickAdd} />
    </div>
  );
}

export default App;
