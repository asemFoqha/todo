import { useState } from "react";
import InputComponent from "./InputComponent";
import TodoList from "./TodoList";
import ITodo from "../interfaces/ITodo";

const TodoBox = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);

  function handleAddingTodo(text: string) {
    let tempTodo: ITodo = {
      id: Math.random(),
      text,
      isDone: false,
    };
    setTodos([tempTodo, ...todos]);
  }

  return (
    <div className="todo_box">
      <h1>Todo</h1>
      <InputComponent onAddTodo={(text) => handleAddingTodo(text)} />
      <div className="divaider" />
      <TodoList todos={todos} />
    </div>
  );
};
export default TodoBox;
