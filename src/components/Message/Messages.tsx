import "./message.css";
import Message from "./Message";
import { useAppSelector } from "../../hooks/stateHooks";
import { useEffect, useRef, useState } from "react";

const Messages = () => {
  const chats = useAppSelector((state) => state.chats.chats);
  const username = useAppSelector((state) => state.join.username);
  const containerRef = useRef<HTMLDivElement>(null);
  const pageSize = 25;
  const [currentPage, setCurrentPage] = useState(1);

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
  }, [containerRef, chats.length]);

  const handleScroll = (e: React.UIEvent<HTMLDivElement, UIEvent>) => {
    if (e.currentTarget.scrollTop === 0 && pageSize * currentPage < chats.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className='all-messages-container' ref={containerRef} onScroll={handleScroll}>
      {chats.length !== 0 ? (
        chats.map((chat, i) => (
          <Message
            key={`${username}+${i}`}
            message={chat.message}
            isMine={username === chat.username}
            username={chat.username}
          />
        ))
      ) : (
        <div>No Messages Yet, Be the first to send a message</div>
      )}
    </div>
  );
};

export default Messages;
