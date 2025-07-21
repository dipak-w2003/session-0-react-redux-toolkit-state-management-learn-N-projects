import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
const initialState = {
  count: 0,
};
const counterSlice = createSlice({
  name: "counter",
  initialState: initialState,
  reducers: {
    countIncrement(state) {
      state.count += 1;
    },
    countDecrement(state) {
      state.count -= 1;
    },
    countIncrementBy10(state) {
      state.count += 10;
    },
    countDecrementBy10(state) {
      state.count -= 10;
    },
    countIncrementByNumber(state, action: PayloadAction<number>) {
      state.count += action.payload;
    },
    countDecrementByNumber(state, action: PayloadAction<number>) {
      state.count -= action.payload;
    },
    countReset(state) {
      state.count = 0;
    },
  },
});

export const {
  countIncrement,
  countDecrement,
  countIncrementBy10,
  countDecrementBy10,
  countIncrementByNumber,
  countDecrementByNumber,
  countReset,
} = counterSlice.actions;
export default counterSlice.reducer;
