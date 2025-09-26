import { useEffect } from "react";
import { getTodos } from "../../api/getTodos";
import { useDispatch, useSelector } from "react-redux";
import {
  addedTodo,
  findTodo,
  remove,
  toggledTodo,
} from "../../store/slice/todosSlice";
import { useAppSelector, type RootState } from "../../store/store";
import { changeActive } from "../../store/slice/activeSlice";
import ChangeTodo from "../ChangeTodo";

export default function Todos() {
  const todos = useAppSelector((state: RootState) => state.todos.todo);

  const active = useSelector(
    (state: RootState) => state.active.changeTodoActive,
  );

  const dispatch = useDispatch();

  useEffect(() => {
    getTodos().then((response) => dispatch(addedTodo(response)));
  }, []);

  return (
    <ul className="h-auto">
      {todos.map((todo) => (
        <li
          key={todo.id}
          className="border-purple mx-auto mb-10 flex max-w-[520px] items-center justify-between border-b-1 pb-4 lg:max-w-[720px]"
        >
          <label className="flex cursor-pointer items-center gap-4">
            <input
              className="border-purple checkbox-checked h-6 w-6 cursor-pointer appearance-none rounded-sm border-1"
              type="checkbox"
              checked={todo.isCompleted}
              onChange={() => dispatch(toggledTodo(todo.id))}
            />
            <span
              className={`${todo.isCompleted ? "text-[#252525]/50 line-through" : ""} text-xl font-bold select-none`}
            >
              {todo.todo}
            </span>
          </label>

          <div className="flex gap-2">
            <div className="cursor-pointer">
              <img
                src="public/img/icons/pen.svg"
                alt="Pen"
                width={20}
                height={20}
                onClick={() => {
                  {
                    dispatch(changeActive(true));
                    dispatch(findTodo(todo.id));
                  }
                }}
              />

              {active && <ChangeTodo />}
            </div>

            <div className="cursor-pointer">
              <img
                src="public/img/icons/trash.svg"
                alt="Trash"
                width={20}
                height={20}
                onClick={() => dispatch(remove(todo.id))}
              />
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
