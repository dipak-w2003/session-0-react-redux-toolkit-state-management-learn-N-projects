import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import {
  persistReducer,
  persistStore,
  FLUSH,      // dispatched when persisting begins
  REHYDRATE,  // dispatched when state is rehydrated from storage
  PAUSE,      // dispatched to pause persistence
  PERSIST,    // dispatched when persistence is set up
  PURGE,      // dispatched when purging the persisted storage
  REGISTER,   // dispatched when a new reducer is registered
} from "redux-persist";

// ✅ Import your feature slices
import counterSlice from "./state-slicers/0-counter/counter.slice";
import themeChooseSlice from "./state-slicers/1-theme-toggler/theme-changer.slice";
import cartSlice from "./state-slicers/2-e-commerce-cart/e-commerce-cart.slice";
import productsListSlice from "./state-slicers/2-e-commerce-cart/e-commerce-products-list-slice";

// ✅ Persist only selected slices (whitelist method)
const persistConfig = {
  key: "root",          // Storage key prefix
  storage,              // Use localStorage
  whitelist: ["cartItem", "productsList"], // ✅ Only these slices will be persisted
};

// ✅ Combine all reducers
const rootReducer = combineReducers({
  counter: counterSlice,
  themeChoose: themeChooseSlice,
  cartItem: cartSlice,
  productsList: productsListSlice,
});

// ✅ Create a persisted reducer using config and combined reducers
const persistedReducer = persistReducer(persistConfig, rootReducer);

// ✅ Configure Redux store
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // 👇 Ignore redux-persist specific action types to avoid warnings
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

// ✅ Create a persistor object to control persistence
export const persistor = persistStore(store);

// ✅ Export types for later use (e.g., useSelector, useDispatch)
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
