import { FC, useRef } from "react";

interface Props {
  onAddTodo: (text: string) => void;
}

const InputComponent: FC<Props> = ({ onAddTodo }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div className="input_wrapper">
      <input type="text" ref={inputRef} placeholder="todo..." />
      <button
        onClick={() => {
          if (inputRef.current) onAddTodo(inputRef.current?.value);
        }}
        className="add_button"
      >
        Add
      </button>
    </div>
  );
};
export default InputComponent;
