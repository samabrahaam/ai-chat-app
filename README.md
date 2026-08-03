# AI Chat App

A full-stack AI-powered chat application built with React, Vite, Express, and the Hugging Face Inference API. The application allows users to submit prompts and receive AI-generated responses in real time while demonstrating modern frontend architecture, responsive design, state management, and API integration.

---

## Features

- AI-powered conversations using the Hugging Face Inference API
- Real-time responses without page refresh
- Markdown rendering for formatted AI responses
- Persistent chat history using LocalStorage
- "New Chat" functionality to clear the current conversation
- Loading indicator while AI is generating a response
- User-friendly error handling
- Responsive design for desktop and mobile devices
- Unit testing using Vitest and React Testing Library

---

## Tech Stack

### Frontend

- React
- Vite
- Axios
- React Markdown
- Remark GFM
- CSS3

### Backend

- Node.js
- Express
- Hugging Face Inference API
- Dotenv
- CORS

### Testing

- Vitest
- React Testing Library
- Jest DOM
- jsdom

---

## Project Structure

```
ai-chat-app/
│
├── client/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── styles/
│   │   ├── __tests__/
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   ├── package.json
│   └── vite.config.js
│
├── server/
│   ├── config/
│   ├── controllers/
│   ├── routes/
│   ├── services/
│   ├── server.js
│   └── package.json
│
├── README.md
└── .gitignore
```

---

## Installation

### Clone the repository

```bash
git clone https://github.com/samabrahaam/ai-chat-app.git

cd ai-chat-app
```

---

### Install dependencies

Client

```bash
cd client
npm install
```

Server

```bash
cd ../server
npm install
```

---

## Environment Variables

Create a `.env` file inside the **server** directory.

```
HF_API_KEY=your_hugging_face_api_key
HF_MODEL=Qwen/Qwen2.5-7B-Instruct
PORT=3001
```

---

## Running the Application

### Start the backend

```
cd server
npm run dev
```

### Start the frontend

```
cd client
npm run dev
```

Open:

```
http://localhost:5173
```

---

## Running Tests

```
cd client

npm test
```

---

## Future Improvements

- Authentication and user accounts
- Streaming AI responses
- Conversation export
- Multiple AI model selection
- Syntax highlighting for code blocks
- Database-backed chat history
- Docker support
- CI/CD pipeline

---

## Design Decisions

- Express was used to securely communicate with the Hugging Face API and protect the API key.
- React component architecture keeps the frontend modular and maintainable.
- LocalStorage was chosen to preserve conversations during browser sessions.
- Markdown rendering improves readability of AI-generated content.
- Unit tests were added to verify the functionality of core UI components.

---

## Author

Sam Abraham
