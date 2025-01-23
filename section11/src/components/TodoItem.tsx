import { Todo } from "../types";

interface TodoItemProps extends Todo {
  onClickDelete: (id: number) => void;
}

const TodoItem = (props: TodoItemProps) => {
  const handleDeleteButton = () => {
    props.onClickDelete(props.id);
  };

  return (
    <div>
      {props.id}번 : {props.content}
      <button onClick={handleDeleteButton}>삭제</button>
    </div>
  );
};

export default TodoItem;
