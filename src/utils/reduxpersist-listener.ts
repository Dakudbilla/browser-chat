import { getStoredState, REHYDRATE } from "redux-persist"

const  crossBrowserListener=(store:any, persistConfig:any ) =>{
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
 