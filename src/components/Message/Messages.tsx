import "./message.css";
import Message from "./Message";

const Messages = () => {
  return (
    <div className='all-messages-container'>
      <Message isMine={true} />
      <Message />
      <Message isMine={true} />
      <Message />
      <Message isMine={true} />
      <Message />
      <Message isMine={true} />
    </div>
  );
};

export default Messages;
