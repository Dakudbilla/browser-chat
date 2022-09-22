import { useState } from "react";
import { addMessage } from "../../features/Chat/chatSlice";
import { useAppDispatch, useAppSelector } from "../../hooks/stateHooks";
import "./chatform.css";
const ChatForm = () => {
  const [message, setMessage] = useState("");
  const username = useAppSelector((state) => state.join.username);
  const dispatch = useAppDispatch();
  const handleMessageSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(
      addMessage({
        username,
        message,
      }),
    );

    setMessage("");
  };

  return (
    <div className='message-form-container'>
      <form className='message-form' onSubmit={handleMessageSubmit}>
        <input
          type='text'
          className='message-text'
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
        <button type='submit' className='message-submit'>
          Send
        </button>
      </form>
    </div>
  );
};

export default ChatForm;
