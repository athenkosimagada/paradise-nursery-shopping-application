import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./counter_slice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default store;
