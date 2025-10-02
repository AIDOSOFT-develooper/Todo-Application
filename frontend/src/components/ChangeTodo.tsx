import { useDispatch } from "react-redux";
import { changeActive } from "../store/slice/activeSlice";
import { changeTodo, setTodoName } from "../store/slice/todosSlice";
import { useAppSelector, type RootState } from "../store/store";
import { useChangeMutation } from "../service/useMutations";

export default function ChangeTodo() {
  const { mutate } = useChangeMutation();

  const todoId = useAppSelector((state: RootState) => state.todos.id);
  const todoName: string = useAppSelector(
    (state: RootState) => state.todos.changingTodo,
  );

  const dispatch = useDispatch();

  const changeTodoHandler = () => {
    if (todoId) {
      dispatch(changeTodo({ id: todoId, todo: todoName }));
      mutate({ id: todoId, todo: todoName });
    }

    dispatch(changeActive(false));
  };

  return (
    <div className="relative cursor-auto">
      <div className="fixed inset-0 z-40 bg-black/10" />

      <div className="fixed top-[30%] left-1/2 z-50 -translate-x-1/2 rounded-2xl bg-white p-4 text-center">
        <h5 className="mb-6 text-2xl font-bold">Change Todo</h5>

        <form className="flex flex-col">
          <input
            className="border-purple placeholder:text-md mb-[120px] w-[440px] overflow-hidden rounded-sm border-1 p-2 outline-none placeholder:text-[#C3C1E5]"
            type="text"
            placeholder="Input your note..."
            onChange={(event) => dispatch(setTodoName(event.target.value))}
          />

          <div className="flex justify-between">
            <button
              type="button"
              className="inline-button"
              onClick={() => dispatch(changeActive(false))}
            >
              Cancel
            </button>

            <button
              type="button"
              className="button"
              onClick={changeTodoHandler}
            >
              Change
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
