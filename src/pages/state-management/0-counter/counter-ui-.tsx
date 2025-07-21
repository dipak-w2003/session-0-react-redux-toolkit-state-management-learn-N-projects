import { useState, type ChangeEvent, type FormEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "../../../redux/store";
import {
  countIncrement,
  countDecrement,
  countIncrementBy10,
  countDecrementBy10,
  countIncrementByNumber,
  countDecrementByNumber,
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
    <main className="h-fit min-h-[fit]  w-fit mx-auto flex flex-col items-center py-4 rounded px-4 bg-black text-white gap-3">
      <header className="text-2xl underline">Simple Counter</header>
      <section className="flex flex-col items-center gap-8">
        <span className="text-xl">$ {count}</span>

        <div className="increment-decrement-cotainer-1 flex gap-10 *:bg-black *:py-2 *:px-4 text-white rounded *:cursor-pointer *:border-white *:border">
          <button onClick={() => dispatch(countIncrement())}>Increment</button>
          <button onClick={() => dispatch(countIncrementBy10())}>
            IncrementBy10
          </button>
          <button onClick={() => dispatch(countDecrement())}>Decrement</button>
          <button onClick={() => dispatch(countDecrementBy10())}>
            DecrementBy10
          </button>
        </div>

        <form
          className="flex gap-6 *:py-2 *:px-4 *:w-40 *:max-w-40 *:text-white *:bg-black  *:outline "
          onSubmit={handleSubmit}
        >
          <input
            type="number"
            name="incrementAmount"
            placeholder="+ Amount"
            className="focus-within:outline-green-500"
            value={incrementAmount == 0 ? "" : incrementAmount}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setIncrementAmount(+e.target.value)
            }
          />
          <input
            type="number"
            name="decrementAmount"
            placeholder="- Amount"
            className=" focus-within:outline-red-500"
            value={decrementAmount == 0 ? "" : decrementAmount}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setDecrementAmount(+e.target.value)
            }
          />

          <button className="cursor-pointer" type="submit">
            Done
          </button>
        </form>
      </section>
    </main>
  );
};

export default CounterUI;
