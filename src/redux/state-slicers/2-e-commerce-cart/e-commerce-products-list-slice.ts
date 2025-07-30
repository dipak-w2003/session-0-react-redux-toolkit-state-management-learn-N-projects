import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { IProducts } from "./e-commerce-cart.type";
import { initialStateCart } from "./e-commerce-cart.slice";

const initialState: IProducts[] = initialStateCart;

const productsListSlice = createSlice({
  name: "products-list",
  initialState,
  reducers: {
    setProducts: (_, action: PayloadAction<IProducts[]>) => {
      return [...action.payload];
    },
  },
});

export const { setProducts } = productsListSlice.actions;
export default productsListSlice.reducer;
