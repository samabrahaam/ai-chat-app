import { useState } from "react";

import Header from "../components/Header";
import ChatBox from "../components/ChatBox";
import PromptInput from "../components/PromptInput";

import "../styles/Home.css";

function Home() {
  const [messages, setMessages] = useState([]);

  const handleSend = (prompt) => {
    if (!prompt.trim()) return;

    const userMessage = {
      role: "user",
      text: prompt,
    };

    setMessages((prev) => [...prev, userMessage]);
  };

  return (
    <div className="home">
      <Header />

      <main className="chat-container">
        <ChatBox messages={messages} />

        <PromptInput onSend={handleSend} />
      </main>
    </div>
  );
}

export default Home;
