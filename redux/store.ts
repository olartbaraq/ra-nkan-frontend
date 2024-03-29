import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "../reduxfeatures/userSlice";
import itemReducer from "../reduxfeatures/itemSlice";
import shippingReducer from "@/reduxfeatures/ShippingAdress";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import autoMergeLevel2 from "redux-persist/es/stateReconciler/autoMergeLevel2";

const persistConfig = {
  key: "root",
  storage,
  stateReconciler: autoMergeLevel2,
};

const rootReducer = combineReducers({
  users: userReducer,
  items: itemReducer,
  shipping: shippingReducer,
  // auth: authReducer,
  // userProfile: userProfileReducer
});

const persistedReducer = persistReducer<ReturnType<typeof rootReducer>>(
  persistConfig,
  rootReducer
);

export const Store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(Store);

export const setupStore = (preloadedState?: Partial<RootState>) => {
  return Store;
};

export const createPreloadedState = (customState: Partial<RootState>) => {
  return {
    users: { ...Store.getState().users, ...customState.users },
    items: { ...Store.getState().items, ...customState.items },
    shipping: { ...Store.getState().items, ...customState.shipping },
  };
};

export type AppDispatch = typeof Store.dispatch;
export type AppStore = ReturnType<typeof setupStore>;
export type RootState = ReturnType<typeof Store.getState>;

// https://blog.logrocket.com/using-typescript-redux-toolkit/
