import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userDtl: {},
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addToUser: (state, action) => {
        state.userDtl = action.payload;
    },
    removeFromUser: (state, action) => {
      state.userDtl = {};
    },
    clearUser: (state) => {
      state.userDtl = {};
    },
  },
});

export const { addToUser, removeFromUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
