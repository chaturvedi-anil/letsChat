import { configureStore } from "@reduxjs/toolkit";
import { activeUserReducers } from "./Reducers/ContactReducer";

export const store = configureStore({
  reducer: {
    activeUserReducers,
  },
});
