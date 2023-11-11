import ITodo from "../interfaces/ITodo";

export function saveTodos(todos: ITodo[]) {
  localStorage.setItem("todos", JSON.stringify(todos));
}

export function getTodos() {
  return localStorage.getItem("todos");
}
