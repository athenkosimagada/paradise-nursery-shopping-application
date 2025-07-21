import { createSlice } from "@reduxjs/toolkit";
import cartProducts from "../data/cart.json";

const initialCart = Array.isArray(cartProducts)
  ? cartProducts.reduce((acc, item) => {
      acc[item.productId] = {
        name: item.name || "Unknown",
        description: item.description || "",
        commonFeature: item.commonFeature || "",
        imageThumbnail: item.imageThumbnail || "",
        quantity: item.quantity || 1,
        price: item.price || 0,
      };
      return acc;
    }, {})
  : {};

const initialState = {
  cart: initialCart,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    incrementQuantity: (state, action) => {
      const productId = action.payload;
      if (state.cart[productId]) {
        state.cart[productId].quantity += 1;
      }
    },
    decrementQuantity: (state, action) => {
      const productId = action.payload;
      if (state.cart[productId]) {
        if (state.cart[productId].quantity <= 1) {
          delete state.cart[productId];
        } else {
          state.cart[productId].quantity -= 1;
        }
      }
    },
    addItemToCart: (state, action) => {
      const product = action.payload;

      if (state.cart[product.id]) {
        state.cart[product.id].quantity += 1;
        return;
      }

      if (product) {
        state.cart[product.id] = product;
      }
    },
    removeItemFromCart: (state, action) => {
      const productId = action.payload;
      delete state.cart[productId];
    },
  },
});

export const {
  addItemToCart,
  removeItemFromCart,
  incrementQuantity,
  decrementQuantity,
} = cartSlice.actions;
export default cartSlice.reducer;
