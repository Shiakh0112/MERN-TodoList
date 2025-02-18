import { useEffect } from "react";
import { deleteTodo, getAllTodos } from "../redux/actions/index";
import { ALL_TODOS, DONE_TODOS, ACTIVE_TODOS } from "../redux/actions/type";
import { useDispatch, useSelector } from "react-redux";
import Todo from "./Todo";
import Tabs from "./Tabs";

export const Todos = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
  const currentTab = useSelector((state) => state.currentTab);

  useEffect(() => {
    dispatch(getAllTodos());
  }, []);

  const getTodos = () => {
    if (currentTab === ALL_TODOS) return todos;
    if (currentTab === ACTIVE_TODOS) return todos.filter((todo) => !todo.done);
    if (currentTab === DONE_TODOS) return todos.filter((todo) => todo.done);
  };

  const removeDoneTodos = () => {
    todos.forEach(({ done, _id }) => {
      if (done) {
        dispatch(deleteTodo(_id));
      }
    });
  };

  return (
    <article className="p-4">
      <div className="flex justify-between items-center mb-4">
        <Tabs currentTab={currentTab} />
        {todos.some((todo) => todo.done) && (
          <button
            onClick={removeDoneTodos}
            className="bg-red-500 text-white px-4 py-2 rounded shadow-md hover:bg-red-600"
          >
            Remove Done Todos
          </button>
        )}
      </div>

      <ul className="space-y-2">
        {getTodos().map((todo) => (
          <Todo key={todo._id} todo={todo} />
        ))}
      </ul>
    </article>
  );
};

export default Todos;
