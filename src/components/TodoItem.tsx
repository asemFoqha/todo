import { FC, useContext } from "react";
import { BsFillTrashFill } from "react-icons/bs";

import ITodo from "../interfaces/ITodo";
import { TodoContext } from "../context/todoContext";
import { saveTodos } from "../services/saveToLocalhost";

interface Props {
  todo: ITodo;
}

const TodoItem: FC<Props> = ({ todo }) => {
  const { todos, setTodos } = useContext(TodoContext);

  const handleFinishingTodo = () => {
    const todoIndex = todos.indexOf(todo);
    const updatedTodos = [...todos];
    updatedTodos[todoIndex].isDone = !updatedTodos[todoIndex].isDone;
    setTodos(updatedTodos);
    saveTodos(updatedTodos);
  };

  const handleDeleteTodo = () => {
    const updatedTodos = todos.filter((item) => item.id !== todo.id);
    setTodos(updatedTodos);
    saveTodos(updatedTodos);
  };

  return (
    <div className={`todo ${todo.isDone && "is_done"}`}>
      <div className={`todo__text-wrapper`}>
        <input
          type="checkbox"
          name={"" + todo.id}
          id={"" + todo.id}
          checked={todo.isDone}
          onChange={handleFinishingTodo}
        />
        <label htmlFor={"" + todo.id}>{todo.text}</label>
      </div>
      <BsFillTrashFill onClick={handleDeleteTodo} width={30} height={30} />
    </div>
  );
};
export default TodoItem;
