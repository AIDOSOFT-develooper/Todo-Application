import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { todo } from "../../types/types";

const initialState: {
  todo: todo[];
  id: number | null;
  changingTodo: string;
  filter: string;
} = {
  todo: [],
  id: null,
  changingTodo: "",
  filter: "",
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addedTodo(state, actions: PayloadAction<todo[]>) {
      const todos = actions.payload;
      state.todo.push(...todos);
    },

    addTodo(state, actions: PayloadAction<todo>) {
      state.todo.push(actions.payload);
    },

    remove(state, actions) {
      state.todo = state.todo.filter((todo) => todo.id !== actions.payload);
    },

    toggledTodo(state, actions) {
      const todo = state.todo.find((todo) => todo.id === actions.payload);
      if (todo) todo.isCompleted = !todo.isCompleted;
    },

    changeTodo(state, actions: PayloadAction<{ id: number; todo: string }>) {
      const todo = state.todo.find((todo) => todo.id === actions.payload.id);
      if (todo) todo.todo = actions.payload.todo;
    },

    setTodoName(state, actions: PayloadAction<string>) {
      state.changingTodo = actions.payload;
    },

    findTodo(state, actions: PayloadAction<number>) {
      const found = state.todo.find((todo) => todo.id === actions.payload);
      state.id = found ? found.id : null;
    },

    filterTodo(state, actions: PayloadAction<string>) {
      state.filter = actions.payload;
    },
  },
});

export const {
  addedTodo,
  addTodo,
  remove,
  toggledTodo,
  changeTodo,
  setTodoName,
  findTodo,
  filterTodo,
} = todoSlice.actions;
export default todoSlice.reducer;
