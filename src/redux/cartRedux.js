import { createSlice } from "@reduxjs/toolkit";
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      state.products.push(action.payload);
    },
    removeProduct: (state, action) => {
      state.products.splice(action.payload.index, 1);
    },
    addQuantity: (state, action) => {
      var product = state.products[action.payload.index];
      product = { ...product, quantity: product.quantity + 1 };

      state.products = [
        ...state.products.slice(0, action.payload.index),
        product,
        ...state.products.slice(action.payload.index + 1),
      ];
    },
    removeQuantity: (state, action) => {
      var product = state.products[action.payload.index];
      product = { ...product, quantity: product.quantity - 1 };
      state.products = [
        ...state.products.slice(0, action.payload.index),
        product,
        ...state.products.slice(action.payload.index + 1),
      ];
    },
  },
});
export const { addProduct, removeProduct, addQuantity, removeQuantity } =
  cartSlice.actions;
export default cartSlice.reducer;
