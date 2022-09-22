import { configureStore } from "@reduxjs/toolkit"
import { persistStore, persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,} from "redux-persist"
import hardSet from "redux-persist/lib/stateReconciler/hardSet"
import storage from "redux-persist/lib/storage" 
import crossBrowserListener from "../utils/reduxpersist-listener"
import { rootReducer } from "./rootReducer"

 
export const persistConfig = {
    key: "root",
    storage,
    stateReconciler: hardSet

  }
   
const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  devTools:import.meta.env.VITE_NODE_ENV,
  middleware:(getDefaultMiddleware)=>{
    return   getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat()
  }
})

export const persistor = persistStore(store)

// subscribe to changes from localstorage
window.addEventListener("storage", crossBrowserListener(store, persistConfig));

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
