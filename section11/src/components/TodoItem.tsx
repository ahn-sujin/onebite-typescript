import { useTodoDispatch } from "../App";
import { Todo } from "../types";

interface TodoItemProps extends Todo {}

const TodoItem = (props: TodoItemProps) => {
  const dispatch = useTodoDispatch();

  const handleDeleteButton = () => {
    dispatch.onClickDelete(props.id);
  };

  return (
    <div>
      {props.id}번 : {props.content}
      <button onClick={handleDeleteButton}>삭제</button>
    </div>
  );
};

export default TodoItem;
