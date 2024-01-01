import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activeUsers: [
    {
      username: "anil@gmail.com",
    },
  ],
};

const activeUserSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    add: (state, action) => {
      let present = state.activeUsers.find(
        (user) => user.username === action.payload
      );
      if (!present) {
        state.activeUsers.unshift({
          username: action.payload,
        });
      } else {
        state.activeUsers.pop({
          username: action.payload,
        });
        state.activeUsers.unshift({
          username: action.payload,
        });
      }
    },
  },
});

export const activeUserReducers = activeUserSlice.reducer;
export const activeUserAction = activeUserSlice.actions;
export const activeUserSelector = (state) =>
  state.activeUserReducers.activeUsers;
