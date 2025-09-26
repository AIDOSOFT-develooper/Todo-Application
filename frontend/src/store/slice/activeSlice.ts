import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  active: false,
  addTodoActive: false,
  changeTodoActive: false,
};

const activeSlice = createSlice({
  initialState,
  name: "active",
  reducers: {
    open(state, actions: PayloadAction<boolean>) {
      state.active = actions.payload;
    },

    close(state, actions: PayloadAction<boolean>) {
      state.active = actions.payload;
    },

    addActive(state, actions: PayloadAction<boolean>) {
      state.addTodoActive = actions.payload;
    },

    changeActive(state, actions: PayloadAction<boolean>) {
      state.changeTodoActive = actions.payload;
    },
  },
});

export const { open, close, addActive, changeActive } = activeSlice.actions;
export default activeSlice.reducer;
