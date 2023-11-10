import { Dispatch, SetStateAction, createContext } from "react";
import ITodo from "../interfaces/ITodo";

interface TodoContextProps {
  todos: ITodo[];
  setTodos: Dispatch<SetStateAction<ITodo[]>>;
}

export const TodoContext = createContext<TodoContextProps>({
  todos: [],
  setTodos: () => {},
});
