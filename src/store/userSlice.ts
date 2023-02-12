import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserLoged } from "../types/interfaces";
import { initialLoggedUser } from "../utils/initialStates/initialStates";

const userSlice = createSlice({
  name: "user",
  initialState: initialLoggedUser,
  reducers: {
    loginUser: (previousState, action: PayloadAction<UserLoged>) => ({
      ...action.payload,
    }),
    logoutUser: (previousState) => initialLoggedUser,
  },
});

export const userReducer = userSlice.reducer;

export const {
  loginUser: loginUserActionCreator,
  logoutUser: logoutUserActionCreator,
} = userSlice.actions;
