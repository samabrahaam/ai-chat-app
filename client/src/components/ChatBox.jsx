import { useEffect, useRef } from "react";

import Message from "./Message";
import LoadingSpinner from "./LoadingSpinner";

import "../styles/ChatBox.css";

function ChatBox({ messages, loading }) {
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, loading]);

  return (
    <section className="chat-box">
      {messages.length === 0 ? (
        <p className="placeholder">
          👋 Welcome! Ask me anything to start chatting.
        </p>
      ) : (
        <>
          {messages.map((message, index) => (
            <Message
              key={index}
              role={message.role}
              text={message.text}
              time={message.time}
            />
          ))}

          {loading && <LoadingSpinner />}

          <div ref={bottomRef}></div>
        </>
      )}
    </section>
  );
}

export default ChatBox;
