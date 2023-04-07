import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addedToCart: (state, action) => {
      console.log("adding", state);
      const itemInCart = state?.find(
        (item) => item.id === action.payload.id
      );
      if (itemInCart) {
        itemInCart.quantity++;
      } else {
        state?.push({ ...action.payload, quantity: 1 });
      }
    },
    incrementQuantity: (state, action) => {
      const item = state.find((item) => item.id === action.payload.id);
      item.quantity++;
    },
    decrementQuantity: (state, action) => {
      const item = state.find((item) => item.id === action.payload.id);
      if (item.quantity === 1) {
      const removeItem = state.filter(
        (item) => item.id !== action.payload
      );
      state = removeItem;      } else {
        item.quantity--;
      }
    },
    removeItem: (state, action) => {
      const removeItem = state.filter(
        (item) => item.id !== action.payload
      );
      state = removeItem;
    },
  },
});

export const cartReducer = cartSlice.reducer;
export const { addedToCart, incrementQuantity, decrementQuantity, removeItem } =
  cartSlice.actions;
