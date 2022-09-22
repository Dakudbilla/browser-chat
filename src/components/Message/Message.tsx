import "./message.css";
interface IMessageProps {
  username: string;
  message: string;
  isMine: boolean;
}

const Message = ({ username, message, isMine }: IMessageProps) => {
  return (
    <div className={`message-container ${isMine ? "isMineMessage" : ""}`}>
      <div className='message-header'>{isMine ? "You" : username}</div>
      <div className='message-content'>{message}</div>
    </div>
  );
};

export default Message;
