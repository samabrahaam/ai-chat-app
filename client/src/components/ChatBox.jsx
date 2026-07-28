import Message from "./Message";
import "../styles/ChatBox.css";

function ChatBox({ messages }) {
  return (
    <section className="chat-box">
      {messages.length === 0 ? (
        <p className="placeholder">
          Start a conversation by asking a question.
        </p>
      ) : (
        messages.map((message, index) => (
          <Message key={index} role={message.role} text={message.text} />
        ))
      )}
    </section>
  );
}

export default ChatBox;
