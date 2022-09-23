import "./message.css";
import Message from "./Message";
import { useAppSelector } from "../../hooks/stateHooks";
import { useEffect, useRef, useState } from "react";
import { Message as IMessage } from "../../features/Chat/chatSlice";

const Messages = () => {
  const chats = useAppSelector((state) => state.chats.chats);
  const username = useAppSelector((state) => state.join.username);
  const [currentPage, setCurrentPage] = useState(1);
  const containerRef = useRef<HTMLDivElement>(null);
  const pageSize = 25;
  const [visibleChats, setVisibleChats] = useState<IMessage[]>([]);
  // Make page scroll to bottom automatically when
  // new message arrives
  useEffect(() => {
    if (containerRef && containerRef.current) {
      const element = containerRef.current;
      element.scroll({
        top: element.scrollHeight,
        left: 0,
        behavior: "smooth",
      });
    }
  }, [containerRef, visibleChats.length]);

  useEffect(() => {
    setVisibleChats(chats.slice(-pageSize * currentPage));
    console.log(visibleChats.length);
  }, [chats.length, currentPage]);

  useEffect(() => {
    if (chats.length > 25 && currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  }, [chats.length]);

  const handleScroll = (e: React.UIEvent<HTMLDivElement, UIEvent>) => {
    if (e.currentTarget.scrollTop === 0 && chats.length > pageSize * currentPage) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className='all-messages-container' ref={containerRef} onScroll={handleScroll}>
      {chats.length !== 0 ? (
        visibleChats.map((chat, i) => (
          <Message
            key={`${username}+${i}`}
            message={chat?.message}
            isMine={username === chat?.username}
            username={chat?.username}
          />
        ))
      ) : (
        <div>No Messages Yet, Be the first to send a message</div>
      )}
    </div>
  );
};

export default Messages;
