import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./state-slicers/0-counter/counter.slice";
import themeChooseSlice from "./state-slicers/1-theme-toggler/theme-changer.slice";
import cartSlice from "./state-slicers/2-e-commerce-cart/e-commerce-cart.slice";
const store = configureStore({
  reducer: {
    counter: counterSlice,
    themeChoose: themeChooseSlice,
    cartItem: cartSlice,
  },
});

// Infer the 'Rootstate' and 'AppDispatch' types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
