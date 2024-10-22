import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/authSlice/index";
import { persistStore, persistReducer } from "redux-persist";
import { apiSlice } from "./api/apiSlice";
import { createWrapper } from "next-redux-wrapper";
import storage from "@/utils/getStorage";

const persistConfig = {
    key: "sharehere",
    storage,
};

const persistedAuthReducer = persistReducer(persistConfig, authReducer);

const reducer = combineReducers({
    auth: persistedAuthReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
});

const store = configureStore({
    reducer: reducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        })
            .concat(apiSlice.middleware),
    devTools: true,
});

const makeStore = () => store;

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore["getState"]>;
export const wrapper = createWrapper<AppStore>(makeStore);
export default store;
export const persistor = persistStore(store);
