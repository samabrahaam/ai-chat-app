import { useState } from "react";

import "../styles/PromptInput.css";

function PromptInput({ onSend }) {
  const [prompt, setPrompt] = useState("");

  const handleSubmit = () => {
    onSend(prompt);
    setPrompt("");
  };

  return (
    <div className="prompt-container">
      <textarea
        rows="3"
        value={prompt}
        placeholder="Ask me anything..."
        onChange={(e) => setPrompt(e.target.value)}
      />

      <button onClick={handleSubmit}>Send</button>
    </div>
  );
}

export default PromptInput;
