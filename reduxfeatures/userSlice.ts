import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../redux/store";
import { UserData } from "@/typings";


const initialState: UserData =
    {
      id: 0,
      lastname: "",
      firstname: "",
      phone: "",
      address: "",
      email: "",
      isLoggedIn: false,
      is_admin: false,
      created_at: "",
      updated_at: "",
    }

export const userSlice = createSlice({
    name: "USER_DETAILS",
    initialState,
    reducers: {
        updateUser: (state: any, action: PayloadAction<UserData>) => {
          state.id = (action.payload.id);
          state.email = (action.payload.email);
          state.lastname = (action.payload.lastname);
          state.firstname = (action.payload.firstname);
          state.address = (action.payload.address);
          state.phone = (action.payload.phone);
          state.is_admin = (action.payload.is_admin);
          state.isLoggedIn = (action.payload.isLoggedIn);
        },
        resetUser: (state: any, action: PayloadAction<UserData>) => {
          initialState
        },
    },
});

export const { updateUser, resetUser } = userSlice.actions;
export const userSelector = (state: RootState) => state.userReducer;
export default userSlice.reducer;