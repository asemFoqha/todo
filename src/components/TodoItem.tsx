import { FC } from "react";
import ITodo from "../interfaces/ITodo";

interface Props {
  todo: ITodo;
  onFinishTodo: (todo: ITodo) => void;
}

const TodoItem: FC<Props> = ({ todo, onFinishTodo }) => {
  return (
    <div className="todo">
      <div className="todo__text-wrapper">
        <input type="radio" onClick={() => onFinishTodo(todo)} />
        <span>{todo.text}</span>
      </div>
      
    </div>
  );
};
export default TodoItem;
