import { useDispatch } from "react-redux";
import { useAppSelector, type RootState } from "../store/store";
import Todos from "./UI/Todos";
import { toggleTheme } from "../store/slice/themeSlice";
import ReactCountryFlag from "react-country-flag";
import { filterTodo } from "../store/slice/todosSlice";

export default function TodoList() {
  const theme = useAppSelector((state: RootState) => state.theme.mode);
  const dispatch = useDispatch();

  return (
    <div className="relative h-full text-center">
      <div className="mb-7.5">
        <h1 className="mb-4 text-xl font-bold lg:text-3xl dark:text-white">
          TODO LIST: MADE IN
          <ReactCountryFlag
            countryCode="KZ"
            svg
            style={{ width: "2em", height: "2em", marginInline: "20px" }}
            alt="Kazakhstan Flag"
          />
          BY AIDOSOFT
        </h1>

        <div className="flex justify-between gap-4">
          <form className="main-border w-full" action="">
            <input
              className="h-full w-full overflow-hidden border-none pl-5 outline-0 dark:text-white dark:placeholder:text-white"
              type="text"
              placeholder="Search note..."
              onChange={(event) => dispatch(filterTodo(event.target.value))}
            />
          </form>

          <button className="button" onClick={() => dispatch(toggleTheme())}>
            {theme === "dark" ? (
              <img src="/img/icons/sun.svg" alt="Switch to light mode" />
            ) : (
              <img src="/img/icons/moon.svg" alt="Switch to dark mode" />
            )}
          </button>
        </div>
      </div>

      <>
        <Todos />
      </>
    </div>
  );
}
