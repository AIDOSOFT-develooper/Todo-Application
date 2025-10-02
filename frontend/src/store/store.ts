import { configureStore } from "@reduxjs/toolkit";

import todoReducer from "./slice/todosSlice";
import activeReducer from "./slice/activeSlice";
import themeReducer from "./slice/themeSlice";
import { useSelector } from "react-redux";

export const store = configureStore({
  reducer: {
    todos: todoReducer,
    active: activeReducer,
    theme: themeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export const useAppSelector = useSelector.withTypes<RootState>();
export type AppDispatch = typeof store.dispatch;
