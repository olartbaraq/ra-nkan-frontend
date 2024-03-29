import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../redux/store";
import { UserData } from "@/typings";


const initialState: UserData =
    {
      lastname: "",
      firstname: "",
      phone: "",
      address: "",
      email: "",
      isLoggedIn: "false",
      created_at: "",
      updated_at: "",
    }

export const userSlice = createSlice({
    name: "USER_DETAILS",
    initialState,
    reducers: {
        updateUser: (state: any, action: PayloadAction<UserData>) => {
          state.email = (action.payload.email);
          state.lastname = (action.payload.lastname);
          state.firstname = (action.payload.firstname);
          state.address = (action.payload.address);
          state.phone = (action.payload.phone);
          state.isLoggedIn = (action.payload.isLoggedIn);
        },
        resetUser: (state: any) => {
          state.email = initialState.email;
          state.lastname = initialState.lastname
          state.firstname = (initialState.firstname);
          state.address = (initialState.address);
          state.phone = (initialState.phone);
          state.isLoggedIn = (initialState.isLoggedIn);
        },
    },
});

export const { updateUser, resetUser } = userSlice.actions;
export const userSelector = (state: RootState) => state.users;
export default userSlice.reducer;