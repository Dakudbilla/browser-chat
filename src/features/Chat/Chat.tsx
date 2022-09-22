import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ChatForm from "../../components/ChatForm/ChatForm";
import Messages from "../../components/Message/Messages";
import { useAppSelector } from "../../hooks/stateHooks";
import "./chat.css";
const Chat = () => {
  const username = useAppSelector((state) => state.join.username);
  const navigate = useNavigate();
  useEffect(() => {
    if (!username) {
      navigate("/join");
    }
  }, [username]);
  return (
    <div className='chats'>
      <Messages />
      <ChatForm />
    </div>
  );
};

export default Chat;
