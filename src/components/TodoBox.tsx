import { useEffect, useState } from 'react';
import InputComponent from './InputComponent';
import TodoList from './TodoList';
import ITodo from '../interfaces/ITodo';
import { TodoContext } from '../context/todoContext';
import { getTodos, saveTodos } from '../services/saveToLocalhost';
import Summary from './Summary';

const TodoBox = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);

  useEffect(() => {
    const storedTodos = getTodos();
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);

  function handleAddingTodo(text: string) {
    let tempTodo: ITodo = {
      id: Math.random(),
      text,
      isDone: false,
    };
    setTodos([tempTodo, ...todos]);
    saveTodos([tempTodo, ...todos]);
  }

  return (
    <TodoContext.Provider value={{ todos, setTodos }}>
      <Summary todos={todos} />
      <div className='todo_box'>
        <h1>Todo</h1>
        <InputComponent onAddTodo={(text) => handleAddingTodo(text)} />
        <div className='divaider' />
        <TodoList />
      </div>
    </TodoContext.Provider>
  );
};
export default TodoBox;
