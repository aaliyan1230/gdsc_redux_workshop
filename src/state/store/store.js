import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import cartActiveReducer from "../cartActive/cartActiveSlice";
import productsReducer from "../products/productsSlice";
import { api } from "../api/apiSlice";
import { cartReducer } from "../cart/cart";

export const store = configureStore({
  reducer:{
    [api.reducerPath]: api.reducer,
    cartActive: cartActiveReducer,
    products: productsReducer,
    cart: cartReducer,
  },
  middleware: (getDefaultMiddleware)=>
    getDefaultMiddleware().concat(api.middleware),
})