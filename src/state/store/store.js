import { configureStore } from "@reduxjs/toolkit";
import cartActiveReducer from "../cartActive/cartActiveSlice";
import productsReducer from "../products/productsSlice";
import { cartReducer } from "../reducers/cart";
import { api } from "../api/apiSlice";

