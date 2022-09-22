import { createSlice, PayloadAction } from "@reduxjs/toolkit"


interface ChatState{
    chats:Message[]
}

interface Message{
    username:string
    message:string
}

const initialState:ChatState={
    chats:[]
}

export const ChatSlice = createSlice({
  name: "chats",
  initialState,
  reducers: {
    addMessage:  (state, action: PayloadAction<Message>) => {
        state.chats.push(action.payload)
      },
    }
})

export const { addMessage } = ChatSlice.actions

export default ChatSlice.reducer