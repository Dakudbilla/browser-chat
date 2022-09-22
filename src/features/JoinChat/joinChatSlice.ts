import { createSlice, PayloadAction } from "@reduxjs/toolkit"


interface JoinChatState{
    username:string
}

const initialState:JoinChatState={
    username:""
}

export const joinChatSlice = createSlice({
  name: "join-chat",
  initialState,
  reducers: {
    join:  (state, action: PayloadAction<string>) => {
        state.username=action.payload
      },
    }
})

export const { join } = joinChatSlice.actions

export default joinChatSlice.reducer