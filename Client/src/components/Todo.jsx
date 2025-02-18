import { useState } from "react";
import { toggleTodo, updateTodo, deleteTodo } from "../redux/actions";
import { useDispatch } from "react-redux";

const Todo = ({ todo }) => {
  const [editing, setEditing] = useState(false);
  const [text, setText] = useState(todo?.data);
  const dispatch = useDispatch();

  const onFormSubmit = (e) => {
    e.preventDefault();
    setEditing((prev) => !prev);
    dispatch(updateTodo(todo._id, text));
  };

  return (
    <li
      className={`flex items-center justify-between bg-white shadow-md p-3 rounded-md my-2 ${
        todo?.done ? "line-through text-gray-400" : "text-gray-900"
      }`}
      onClick={() => dispatch(toggleTodo(todo._id))}
    >
      {!editing ? (
        <span>{todo?.data}</span>
      ) : (
        <form onSubmit={onFormSubmit}>
          <input
            type="text"
            value={text}
            className="border rounded px-2 py-1"
            onChange={(e) => setText(e.target.value)}
          />
        </form>
      )}

      <div className="flex space-x-2">
        <span
          className="text-red-500 cursor-pointer"
          onClick={() => dispatch(deleteTodo(todo._id))}
        >
          <i className="fas fa-trash"></i>
          Delete
        </span>
        <span
          className="text-blue-500 cursor-pointer"
          onClick={() => setEditing((prev) => !prev)}
        >
          <i className="fas fa-pen"></i>
          Edit
        </span>
      </div>
    </li>
  );
};

export default Todo;
