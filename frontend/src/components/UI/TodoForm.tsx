import { useDispatch } from "react-redux";
import { useState } from "react";
import { addActive } from "../../store/slice/activeSlice";
import { postTodos } from "../../service/api";
import type { todo } from "../../types/types";
import { addTodo } from "../../store/slice/todosSlice";

export default function TodoForm() {
  const [text, setText] = useState("");

  const dispatch = useDispatch();

  const postHandler = () => {
    const newTodo: todo = {
      id: Date.now(),
      todo: text,
      isCompleted: false,
    };

    dispatch(addTodo(newTodo));

    postTodos(newTodo).then((response) => response);

    dispatch(addActive(false));
  };

  return (
    <div className="relative cursor-auto">
      <div className="fixed inset-0 z-40 bg-black/40" />

      <div className="fixed top-[30%] left-1/2 z-50 -translate-x-1/2 rounded-2xl bg-white p-4 text-center">
        <h5 className="mb-6 text-2xl font-bold">New Note</h5>

        <form className="flex flex-col">
          <input
            className="border-purple placeholder:text-md mb-[120px] w-[440px] overflow-hidden rounded-sm border-1 p-2 outline-none placeholder:text-[#C3C1E5]"
            type="text"
            placeholder="Input your note..."
            onChange={(event) => setText(event.target.value)}
          />

          <div className="flex justify-between">
            <button
              type="button"
              className="inline-button"
              onClick={() => dispatch(addActive(false))}
            >
              Cancel
            </button>

            <button type="button" className="button" onClick={postHandler}>
              Apply
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
