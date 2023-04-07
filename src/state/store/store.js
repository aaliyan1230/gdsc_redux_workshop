import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import cartActiveReducer from "../cartActive/cartActiveSlice";
import productsReducer from "../products/productsSlice";
import { cartReducer } from "../reducers/cart";
import { api } from "../api/apiSlice";

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