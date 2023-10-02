import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counter";
import todo from "./todo";

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    todo: todo,
  },
});
