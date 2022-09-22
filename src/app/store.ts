import { configureStore } from "@reduxjs/toolkit"
import { persistStore, persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,} from "redux-persist"
import autoMergeLevel2 from "redux-persist/es/stateReconciler/autoMergeLevel2"
import storage from "redux-persist/lib/storage" 
import crossBrowserListener from "../utils/reduxpersist-listener"
import { combinedReducer, rootReducer } from "./rootReducer"

 
export const persistConfig = {
    key: "browser-chat",
    storage,
    blacklist:["join"]
    // stateReconciler: autoMergeLevel2
  }
   
const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  devTools:import.meta.env.VITE_NODE_ENV==="development",
  middleware:(getDefaultMiddleware)=>{
    return   getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, PAUSE, REHYDRATE,PERSIST, PURGE, REGISTER],
      },
    })
  }
})

export const persistor = persistStore(store)

// subscribe to changes from localstorage
//window.addEventListener("storage", crossBrowserListener(store, persistConfig));

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof combinedReducer>

export type AppDispatch = typeof store.dispatch
