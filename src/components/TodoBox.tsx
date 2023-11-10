import { useState } from "react";
import InputComponent from "./InputComponent";
import TodoList from "./TodoList";
import ITodo from "../interfaces/ITodo";
import { TodoContext } from "../context/todoContext";

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
    <TodoContext.Provider value={{ todos, setTodos }}>
      <div className="todo_box">
        <h1>Todo</h1>
        <InputComponent onAddTodo={(text) => handleAddingTodo(text)} />
        <div className="divaider" />
        <TodoList  />
      </div>
    </TodoContext.Provider>
  );
};
export default TodoBox;
