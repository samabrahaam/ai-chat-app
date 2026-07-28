import "../styles/ChatBox.css";

function ChatBox({ messages }) {
  return (
    <section className="chat-box">
      {messages.length === 0 ? (
        <p>Start a conversation by entering a prompt.</p>
      ) : (
        messages.map((message, index) => (
          <div key={index}>
            <strong>You:</strong> {message.text}
          </div>
        ))
      )}
    </section>
  );
}

export default ChatBox;
