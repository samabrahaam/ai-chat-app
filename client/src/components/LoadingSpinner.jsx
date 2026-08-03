import "../styles/LoadingSpinner.css";

function LoadingSpinner() {
  return (
    <div className="message ai">
      <div className="message-header">
        <strong>AI</strong>
      </div>

      <div className="typing-indicator">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
}

export default LoadingSpinner;
