import { useEffect, useState } from "react";

import Header from "../components/Header";
import ChatBox from "../components/ChatBox";
import PromptInput from "../components/PromptInput";
import ErrorMessage from "../components/ErrorMessage";

import api from "../services/api";

import "../styles/Home.css";

function Home() {
  // Load saved chat history when the app starts
  const [messages, setMessages] = useState(() => {
    const savedMessages = localStorage.getItem("chatHistory");
    return savedMessages ? JSON.parse(savedMessages) : [];
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Save chat history whenever messages change
  useEffect(() => {
    localStorage.setItem("chatHistory", JSON.stringify(messages));
  }, [messages]);

  const handleSend = async (prompt) => {
    if (!prompt.trim() || loading) return;

    const userMessage = {
      role: "user",
      text: prompt,
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    setMessages((prev) => [...prev, userMessage]);

    setLoading(true);
    setError("");

    try {
      const response = await api.post("/chat", {
        prompt,
      });

      const aiMessage = {
        role: "ai",
        text: response.data.response,
        time: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      };

      setMessages((prev) => [...prev, aiMessage]);
    } catch (err) {
      console.error(err);

      setError("Unable to reach the AI service. Please try again in a moment.");
    } finally {
      setLoading(false);
    }
  };

  const clearChat = () => {
    const confirmed = window.confirm(
      "Are you sure you want to clear this conversation?",
    );

    if (!confirmed) return;

    setMessages([]);
    setError("");
    localStorage.removeItem("chatHistory");
  };

  return (
    <div className="home">
      <Header onClearChat={clearChat} />

      <main className="chat-container">
        <ErrorMessage message={error} />

        <ChatBox messages={messages} loading={loading} />

        <PromptInput onSend={handleSend} loading={loading} />
      </main>
    </div>
  );
}

export default Home;
