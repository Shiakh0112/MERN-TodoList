import { useState } from "react";

import { useDispatch } from "react-redux";

import { addNewTodo } from "../redux/actions";
function TodoForm() {
  const [text, setText] = useState("");

  const dispatch = useDispatch();

  const onFormSubmit = (e) => {
    e.preventDefault();

    dispatch(addNewTodo(text));

    setText("");
  };

  const onInputChange = (e) => {
    setText(e.target.value);
  };
  return (
    <form className="flex justify-center my-4" onSubmit={onFormSubmit}>
      <input
        onChange={onInputChange}
        type="text"
        value={text}
        placeholder="Enter your todo..."
        className="border rounded-lg p-2 w-2/3 shadow-md outline-none"
      />
    </form>
  );
}

export default TodoForm;
