import { FC } from "react";
import ITodo from "../interfaces/ITodo";

interface Props {
  todos: ITodo[];
}

const TodoList: FC<Props> = ({ todos }) => {
  return (
    <div className="todo_list">
      {todos.map((todo) => (
        <div>{todo.text}</div>
      ))}
      {/* create the todo item */}
    </div>
  );
};
export default TodoList;
