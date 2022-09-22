import "./message.css";
import Message from "./Message";
import { useAppSelector } from "../../hooks/stateHooks";

const Messages = () => {
  const chats = useAppSelector((state) => state.chats.chats);
  const username = useAppSelector((state) => state.join.username);
  return (
    <div className='all-messages-container'>
      {chats.length !== 0 ? (
        chats.map((chat, i) => (
          <Message
            key={`${username}+${i}`}
            message={chat.message}
            isMine={username === chat.username}
            username={username}
          />
        ))
      ) : (
        <div>No Messages Yet, Be the first to send a message</div>
      )}
    </div>
  );
};

export default Messages;
