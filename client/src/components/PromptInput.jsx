import "../styles/PromptInput.css";

function PromptInput() {
  return (
    <div className="prompt-container">
      <textarea placeholder="Ask me anything..." rows="3" />

      <button>Send</button>
    </div>
  );
}

export default PromptInput;
