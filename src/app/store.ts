import { configureStore } from "@reduxjs/toolkit"
import { persistStore, persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,} from "redux-persist"
import storage from "redux-persist/lib/storage" 
import { rootReducer } from "./rootReducer"

 
const persistConfig = {
    key: "root",
    storage,
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

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch