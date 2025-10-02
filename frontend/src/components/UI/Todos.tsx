import { useQuery } from "@tanstack/react-query";
import { getTodos } from "../../service/api";
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
import { useEffect } from "react";
import { useDeleteMutation } from "../../service/useMutations";
import Empty from "./Empty";

export default function Todos() {
  const { mutate } = useDeleteMutation();

  const todos = useAppSelector((state: RootState) => state.todos.todo);

  const active = useSelector(
    (state: RootState) => state.active.changeTodoActive,
  );

  const dispatch = useDispatch();

  const useGetTodos = useQuery({
    queryKey: ["todo"],
    queryFn: getTodos,
  });

  const { data, isLoading } = useGetTodos;

  useEffect(() => {
    if (data) {
      dispatch(addedTodo(data));
    }
  }, [data, dispatch]);

  if (isLoading) <div>Loading...</div>;

  if (!todos || todos.length === 0) {
    return <Empty />;
  }

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
              className={`${todo.isCompleted ? "text-[#252525]/50 line-through dark:text-white/50" : ""} text-xl font-bold select-none dark:text-white`}
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
                onClick={() => {
                  mutate(todo.id);
                  dispatch(remove(todo.id));
                }}
              />
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
