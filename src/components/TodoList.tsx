import { FC } from "react";
import ITodo from "../interfaces/ITodo";
import TodoItem from "./TodoItem";

interface Props {
  todos: ITodo[];
}

const TodoList: FC<Props> = ({ todos }) => {
  return (
    <div className="todo_list">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onFinishTodo={(test) => console.log(test)}
        />
      ))}
      {/* create the todo item */}
    </div>
  );
};
export default TodoList;
