
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authReducer from "@/redux/slice/auth.slice";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";

const combinedReducer = combineReducers({
    auth: authReducer
})
const persistConfig = {
    key: 'root',
    storage
}

const persistedReducer = persistReducer(persistConfig, combinedReducer);
export const store = configureStore({
    reducer: persistedReducer
});
export const persister = persistStore(store);