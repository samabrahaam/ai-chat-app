import "./../styles/Message.css";

function Message({ role, text }) {
  return (
    <div className={`message ${role}`}>
      <strong>{role === "user" ? "You" : "AI"}:</strong>
      <p>{text}</p>
    </div>
  );
}

export default Message;
