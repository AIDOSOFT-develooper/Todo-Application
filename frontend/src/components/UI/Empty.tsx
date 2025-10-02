import { useAppSelector, type RootState } from "../../store/store";

export default function Empty() {
  const theme = useAppSelector((state: RootState) => state.theme.mode);

  return (
    <div className="flex flex-col items-center justify-center">
      {theme === "dark" ? (
        <img className="mb-5" src="/img/empty-dark.svg" alt="" />
      ) : (
        <img className="mb-5" src="/img/empty.svg" alt="" />
      )}

      <div className="text-xl font-bold dark:text-white">Empty...</div>
    </div>
  );
}
