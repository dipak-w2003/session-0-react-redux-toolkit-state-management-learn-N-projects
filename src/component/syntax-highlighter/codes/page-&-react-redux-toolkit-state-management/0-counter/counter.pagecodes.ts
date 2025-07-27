import type { ICodes } from "../../codes.type";

export const grabbedCounterCodes: ICodes[] = [
  {
    id: 0,
    name: "counter-page.tsx",
    lang: "typescript",
    location: "src/pages/state-management/0-counter/counter-page.tsx",
    code: `import { lazy } from "react";
const CounterUI = lazy(() => import("./counter-ui-"));
const CounterPage = () => {
  return (
    <main className="h-fit min-h-[fit] w-fit mx-auto flex flex-col items-center py-4 gap-4 rounded px-4">
      <CounterUI />
    </main>
  );
};
export default CounterPage;`,
    comments: `Defines a React component CounterPage that lazily loads and renders the CounterUI component for code-splitting and performance optimization. It uses Tailwind CSS for layout and styling.`
  },
  {
    id: 1,
    name: "counter-ui-.tsx",
    lang: "typescript",
    location: "src/pages/state-management/0-counter/counter-ui-.tsx",
    code: `import { useState, type ChangeEvent, type FormEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "../../../redux/store";
import {
  countIncrement,
  countDecrement,
  countIncrementBy10,
  countDecrementBy10,
  countIncrementByNumber,
  countDecrementByNumber,
  countReset,
} from "../../../redux/state-slicers/0-counter/counter.slice";

const CounterUI = () => {
  const { count } = useSelector((state: RootState) => state.counter);
  const dispatch: AppDispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState<number>(0);
  const [decrementAmount, setDecrementAmount] = useState<number>(0);

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    console.log(incrementAmount, decrementAmount);
    dispatch(countIncrementByNumber(incrementAmount));
    dispatch(countDecrementByNumber(decrementAmount));
    setTimeout(() => {
      setIncrementAmount(0);
      setDecrementAmount(0);
    }, 1000);
  };

  return (
    <main className="h-fit min-h-[fit] w-fit mx-auto flex flex-col items-center py-4 rounded px-4 bg-black text-white gap-3">
      <header className="text-2xl underline">Simple Counter</header>
      <section className="flex flex-col items-center gap-8">
        <span className="text-xl">$ {count}</span>

        <div className="increment-decrement-cotainer-1 flex gap-10 *:bg-black *:py-2 *:px-4 text-white rounded *:cursor-pointer *:border-white *:border">
          <button onClick={() => dispatch(countIncrement())}>Increment</button>
          <button onClick={() => dispatch(countIncrementBy10())}>IncrementBy10</button>
          <button onClick={() => dispatch(countDecrement())}>Decrement</button>
          <button onClick={() => dispatch(countDecrementBy10())}>DecrementBy10</button>
        </div>

        <form
          className="flex gap-6 *:py-2 *:px-4 *:w-40 *:max-w-40 *:text-white *:bg-black *:outline"
          onSubmit={handleSubmit}
        >
          <input
            type="number"
            name="incrementAmount"
            placeholder="+ Amount"
            className="focus-within:outline-green-500"
            value={incrementAmount === 0 ? "" : incrementAmount}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setIncrementAmount(+e.target.value)
            }
          />
          <input
            type="number"
            name="decrementAmount"
            placeholder="- Amount"
            className="focus-within:outline-red-500"
            value={decrementAmount === 0 ? "" : decrementAmount}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setDecrementAmount(+e.target.value)
            }
          />
          {(incrementAmount || decrementAmount) > 0 ? (
            <button className="cursor-pointer" type="submit">
              Done
            </button>
          ) : (
            ""
          )}
          <button
            type="button"
            className="cursor-pointer"
            onClick={() => dispatch(countReset())}
          >
            Reset
          </button>
        </form>
      </section>
    </main>
  );
};

export default CounterUI;`,
    comments: `Implements the CounterUI component connected to Redux. Displays count and buttons for increment/decrement by 1 or 10. Includes inputs for custom increments/decrements handled through a form. Uses Tailwind CSS for styling.`
  },
  {
    id: 2,
    name: "counter.slice.ts",
    lang: "typescript",
    location: "src/redux/state-slicers/0-counter/counter.slice.ts",
    code: `import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
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

export default counterSlice.reducer;`,
    comments: `Defines a Redux Toolkit slice 'counter' with state and reducers for incrementing, decrementing, incrementing/decrementing by 10 or custom amounts, and resetting the count. Exports actions and reducer.`
  },
  {
    id: 3,
    name: "store.ts",
    lang: "typescript",
    location: "src/redux/store.ts",
    code: `import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./state-slicers/0-counter/counter.slice";

const store = configureStore({
  reducer: {
    counter: counterSlice,
  },
});

// Infer RootState and AppDispatch types from the store
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;`,
    comments: `Configures the Redux store by combining the counter slice reducer. Exports typed RootState and AppDispatch for use throughout the app, and exports the store as default.`
  },
];
