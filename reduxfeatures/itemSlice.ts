import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../redux/store";
import { Item } from "@/typings";


const initialState: Item[] = [

  {
    id: 0,
    name: "",
    description: "",
    price: "",
    totalPrice: "",
    image: "",
    count: 1,
    shop_name: "",
    category_name:"",
    sub_category_name:"",
  }
]

export const itemSlice = createSlice({
    name: "ITEM_DETAILS",
    initialState,
    reducers: {
      addItem: (state: Item[], action: PayloadAction<Item>) => {
        state.push(action.payload);
      },
      removeItem: (state: Item[], action: PayloadAction<Item>) => {
        const index = state.findIndex((item: Item) => item.id === action.payload.id);
  
        if (index !== -1) {
          // If the item is found, remove it from the state array
          state.splice(index, 1);
        }
      },
      updateItem: (state: Item[], action:PayloadAction<Item>) => {
        const index = state.findIndex((item: Item) => item.id === action.payload.id);

        if (index !== -1) {
          // If the item is found, replace it with the updated item
          state[index] = action.payload;
        }
      },
      clearItems: (state: Item[]) => {
        state.splice(0, state.length);
      }
    },
});

export const { addItem, removeItem, clearItems, updateItem } = itemSlice.actions;
export const itemSelector = (state: RootState) => state.items;
export default itemSlice.reducer;