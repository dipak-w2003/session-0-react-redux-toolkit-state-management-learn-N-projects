import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./state-slicers/0-counter/counter.slice";
const store = configureStore({
  reducer: {
    counter:counterSlice
  },
});

// Infer the 'Rootstate' and 'AppDispatch' types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
