import Header from "../components/Header";
import ChatBox from "../components/ChatBox";
import PromptInput from "../components/PromptInput";

import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <Header />

      <main className="chat-container">
        <ChatBox />
        <PromptInput />
      </main>
    </div>
  );
}

export default Home;
