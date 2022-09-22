import "./message.css";
interface IMessageProps {
  username?: string;
  message?: string;
  isMine?: boolean;
}

const Message = ({ username, message, isMine }: IMessageProps) => {
  return (
    <div className={`message-container ${isMine ? "isMineMessage" : ""}`}>
      <div className='message-header'></div>
      <div className='message-content'>
        Enjoy connecting with your friendEnjoy connecting with your friendEnjoy connecting with your
        friendEnjoy connecting witEnjoy connecting with your friendEnjoy connecting with your
      </div>
    </div>
  );
};

export default Message;
