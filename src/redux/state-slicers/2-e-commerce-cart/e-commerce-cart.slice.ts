import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { ICarts } from "./e-commerce-cart.type";

export const initialStateCart: ICarts[] = [
  {
    id: -0,
    title: "Baseball Cap",
    description: "lorem ipsum",
    image: "link",
    price: 199,
    rating: {
      rate: 2.0,
      count: 99,
    },
    category: "mens cloth",
    quantity: 1,
  },
];
const cartSlice = createSlice({
  name: "cartItem",
  initialState: initialStateCart,
  reducers: {
    addToCart(state, action: PayloadAction<ICarts>) {
      const item = action.payload;
      const checkDuplicate = state.filter(
        (cart) => cart.id == item.id && cart.title == item.title
      );
      console.log(checkDuplicate.length > 0);

      if (item && checkDuplicate.length < 1) {
        state.push({ ...action.payload, quantity: 1 });
      }
    },
    increaseItemQuantity(state, action: PayloadAction<{ id: number }>) {
      const itemId = action.payload.id;
      const item = state.find((item) => item.id === itemId);
      console.log("Increasing Quantity ", item);
      if (item) {
        item.quantity += 1;
      }
    },
    decreaseItemQuantity(state, action: PayloadAction<{ id: number }>) {
      const itemId = action.payload.id;
      const item = state.find((item) => item.id === itemId);
      console.log("Decreasing Quantity ", item);
      if (item && item.quantity !== 0) {
        item.quantity -= 1;
      }
    },

    removeFromCart(state, action: PayloadAction<{ id: number }>) {
      const itemId = action.payload.id;
      const itemIdx = state.findIndex((item) => item.id === itemId);
      if (itemIdx === -1) return;
      state.splice(itemIdx, 1);
    },
  },
});

export const {
  addToCart,
  decreaseItemQuantity,
  increaseItemQuantity,
  removeFromCart,
} = cartSlice.actions;
export default cartSlice.reducer;
