import { FC, useContext } from "react";
import { BsFillTrashFill } from "react-icons/bs";

import ITodo from "../interfaces/ITodo";
import { TodoContext } from "../context/todoContext";

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
      <BsFillTrashFill width={30} height={30} />
    </div>
  );
};
export default TodoItem;
