import { createSlice } from "@reduxjs/toolkit";

const initialState = false

const cartActiveSlice = createSlice({
  name: "cartActive",
  initialState,
  reducers: {
    cartOpened(state= initialState, action){

      return true;
    },
    cartClosed(state= initialState, action){

      return false;
    }
  },
});

export const cartActiveReducer = cartActiveSlice.reducer;
export const { cartOpened, cartClosed } =
  cartActiveSlice.actions;
