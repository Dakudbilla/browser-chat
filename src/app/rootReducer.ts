import { AnyAction, combineReducers,Reducer } from "@reduxjs/toolkit";
import { RootState } from "./store";

// Combines reducers
const combinedReducer = combineReducers({
    // [studentClassesApi.reducerPath]:studentClassesApi.reducer,
    //   studentData: StudentSliceReducer
  });
  
  
  
  // Declare root reducer to help clear state when user logs out
export  const rootReducer: Reducer = (state: RootState, action: AnyAction) => {
    // if (action.type === "logoutStudent") {
    //   state = {} as RootState;
    // }
    return combinedReducer(state, action);
  };
  
