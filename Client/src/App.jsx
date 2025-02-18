import "./App.css";

// components
import Header from "./components/Header";
import TodoForm from "./components/TodoForm";
import Todos from "./components/Todos";

function App() {
  return (
    <div className="w-[50%] m-auto p-6 bg-white shadow-2xl rounded-lg">
      <Header />
      <TodoForm />
      <Todos />
    </div>
  );
}

export default App;
