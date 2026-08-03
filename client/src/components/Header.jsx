import "../styles/Header.css";

function Header({ onClearChat }) {
  return (
    <header className="header">
      <div className="header-content">
        <div>
          <h1>AI Chat App</h1>
          <p>Powered by Hugging Face</p>
        </div>

        <button className="new-chat-btn" onClick={onClearChat}>
          New Chat
        </button>
      </div>
    </header>
  );
}

export default Header;
