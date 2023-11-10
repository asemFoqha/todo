import { FC, useRef } from "react";
import { GrAdd } from "react-icons/gr";

interface Props {
  onAddTodo: (text: string) => void;
}

const InputComponent: FC<Props> = ({ onAddTodo }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div className="input_wrapper">
      <input type="text" ref={inputRef} placeholder="todo..." />

      <div
        onClick={() => {
          if (inputRef.current?.value) onAddTodo(inputRef.current?.value);
        }}
        className="add_button"
      >
        <GrAdd width={10} height={10} />
      </div>
    </div>
  );
};
export default InputComponent;
