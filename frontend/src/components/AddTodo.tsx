import type { RootState } from "../store/store";
import { useDispatch, useSelector } from "react-redux";
import TodoForm from "./UI/TodoForm";
import { addActive } from "../store/slice/activeSlice";

export default function AddTodo() {
  const active = useSelector((state: RootState) => state.active.addTodoActive);
  const dispatch = useDispatch();

  return (
    <>
      <div className="bg-purple fixed bottom-6 flex h-12.5 w-12.5 cursor-pointer items-center justify-center justify-self-end rounded-full">
        <img
          className=""
          src="/img/icons/plus.svg"
          alt="Add"
          width={24}
          height={24}
          onClick={() => dispatch(addActive(true))}
        />

        {active && <TodoForm />}
      </div>
    </>
  );
}
