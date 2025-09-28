import TodoList from "../components/TodoList";
import AddTodo from "../components/AddTodo";

export default function App() {
  return (
    <div className="mx-auto min-h-screen px-10 py-10 md:max-w-[998px]">
      <TodoList />
      <AddTodo />
    </div>
  );
}
