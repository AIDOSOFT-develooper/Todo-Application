import Todos from "./UI/Todos";

export default function TodoList() {
  return (
    <div className="relative h-full text-center">
      <div className="mb-7.5">
        <h1 className="mb-4 text-xl font-bold lg:text-3xl">TODO LIST</h1>

        <div className="flex justify-between gap-4">
          <form className="main-border w-full" action="">
            <input
              className="h-full w-full overflow-hidden border-none pl-5 outline-0"
              type="text"
              placeholder="Search note..."
            />
          </form>
        </div>
      </div>

      <>
        <Todos />
      </>
    </div>
  );
}
