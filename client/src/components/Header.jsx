import "../styles/Header.css";

function Header({ onClearChat }) {
  return (
    <header className="header">
      <div>
        <h1>AI Chat App</h1>
        <p>Powered by Hugging Face</p>
      </div>

      <button className="new-chat-btn" onClick={onClearChat}>
        New Chat
      </button>
    </header>
  );
}

export default Header;
