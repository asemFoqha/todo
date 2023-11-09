import { FC, useRef } from "react";

interface Props {}

const InputComponent: FC<Props> = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div className="input_wrapper">
      <input type="text" ref={inputRef} placeholder="todo..." />
      <button className="add_button">Add</button>
    </div>
  );
};
export default InputComponent;
