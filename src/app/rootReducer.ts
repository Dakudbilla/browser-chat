import { AnyAction, combineReducers,Reducer } from "@reduxjs/toolkit";
import chatReducer  from "../features/Chat/chatSlice";
import joinChatReducer from "../features/JoinChat/joinChatSlice";
import { RootState } from "./store";

// Combines reducers
const combinedReducer = combineReducers({
    join:joinChatReducer,
    chats:chatReducer
  });
  
  
  
  // Declare root reducer to help clear state when user logs out
export  const rootReducer: Reducer = (state: RootState, action: AnyAction) => {
    if (action.type === "REHYDRATE") {
      // eslint-disable-next-line no-self-assign
      state = state
    }
    return combinedReducer(state, action);
  };
  
