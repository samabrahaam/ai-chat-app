import { useState } from "react";
import "../styles/PromptInput.css";

function PromptInput({ onSend }) {
  const [prompt, setPrompt] = useState("");

  const handleSubmit = () => {
    if (!prompt.trim()) return;

    onSend(prompt);
    setPrompt("");
  };

  return (
    <div className="prompt-container">
      <textarea
        rows="3"
        placeholder="Ask me anything..."
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            handleSubmit();
          }
        }}
      />

      <button onClick={handleSubmit}>Send</button>
    </div>
  );
}

export default PromptInput;
