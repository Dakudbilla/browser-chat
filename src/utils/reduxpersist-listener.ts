import { EnhancedStore, AnyAction, MiddlewareArray } from "@reduxjs/toolkit"
import { getStoredState, PersistConfig, REHYDRATE } from "redux-persist"
import { ThunkMiddleware } from "redux-thunk"

const  crossBrowserListener=(store: EnhancedStore<unknown, AnyAction, MiddlewareArray<[ThunkMiddleware<unknown, AnyAction, undefined>]>>,
     persistConfig: PersistConfig<unknown, unknown, unknown, unknown> ) =>{
  return async function() {
    const state = await getStoredState(persistConfig)
    
    store.dispatch({
      type: REHYDRATE,
      key: persistConfig.key,
      payload: state,
    })
  }
}

export default crossBrowserListener
 