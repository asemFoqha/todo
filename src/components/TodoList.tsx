import { useContext } from "react";
import { TodoContext } from "../context/todoContext";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const { todos } = useContext(TodoContext);
  return (
    <div className="todo_list">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
      {/* create the todo item */}
    </div>
  );
};
export default TodoList;
