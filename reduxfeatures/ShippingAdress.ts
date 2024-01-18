import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../redux/store";
import { Shipping } from "@/typings";


const initialState: Shipping =
    {
      lastname: "",
      firstname: "",
      phone: "",
      address: "",
      city: "",
      postal_code: "",
      country: "",
      state: "",
    }

export const shippingSlice = createSlice({
    name: "SHIPPING_DETAILS",
    initialState,
    reducers: {
        updateShipping: (state: any, action: PayloadAction<Shipping>) => {
          state.city = (action.payload.city);
          state.lastname = (action.payload.lastname);
          state.firstname = (action.payload.firstname);
          state.address = (action.payload.address);
          state.phone = (action.payload.phone);
          state.postal_code = (action.payload.postal_code);
          state.country = (action.payload.country);
          state.state = (action.payload.state);
        },
        resetShipping: (state: any) => {
          state.city = initialState.city;
          state.lastname = initialState.lastname
          state.firstname = (initialState.firstname);
          state.address = (initialState.address);
          state.phone = (initialState.phone);
          state.postal_code = (initialState.postal_code);
          state.country = (initialState.country);
          state.state = (initialState.state);
        },
    },
});

export const { updateShipping, resetShipping } = shippingSlice.actions;
export const shippingSelector = (state: RootState) => state.shipping;
export default shippingSlice.reducer;