import { FC, useRef } from "react";
import { GrAdd } from "react-icons/gr";

interface Props {
  onAddTodo: (text: string) => void;
}

const InputComponent: FC<Props> = ({ onAddTodo }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleAddingTodo = () => {
    if (inputRef.current?.value) {
      onAddTodo(inputRef.current?.value);
      inputRef.current.value = "";
    }

  };

  return (
    <div className="input_wrapper">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleAddingTodo();
        }}
      >
        <input type="text" ref={inputRef} placeholder="todo..." />
      </form>

      <div onClick={handleAddingTodo} className="add_button">
        <GrAdd width={10} height={10} />
      </div>
    </div>
  );
};
export default InputComponent;
