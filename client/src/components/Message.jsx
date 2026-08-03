import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";


import "../styles/Message.css";

function Message({ role, text, time }) {
  

  return (
    <article className={`message ${role}`}>
      <div className="message-header">
        <strong>{role === "user" ? "You" : "AI"}</strong>

        <small>{time}</small>
      </div>

      <ReactMarkdown remarkPlugins={[remarkGfm]}>
        {text}
      </ReactMarkdown>
    </article>
  );
}

export default Message;