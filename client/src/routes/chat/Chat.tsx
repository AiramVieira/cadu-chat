import { useEffect, useState } from "react";
import "./Chat.css";
import { io } from "socket.io-client";
import { v4 as uuidv4 } from "uuid";

const socket = io("http://localhost:8080");
socket.on("connect", () =>
  console.log("[IO] Connect => A new connection has been established")
);

let myId: string | null = localStorage.getItem("userId") || null;
if (myId == null) {
  myId = uuidv4();
  localStorage.setItem("userId", myId);
}

interface IMessages {
  id: number;
  message: string;
}

const Chat = () => {
  const [message, setMessage] = useState<string>("");
  const [messages, setMessages] = useState<IMessages | any>([]);

  const handleMessage = (e: any) => setMessage(e.target.value);

  useEffect(() => {
    const handleNewMessage = (newMessage: any) =>
      setMessages([...messages, newMessage]);
    socket.on("chat.message", handleNewMessage);
    
    return () => socket.off("chat.message", handleNewMessage);
  }, [messages]);

  const handleFormSubmit = (event: any) => {
    event.preventDefault();
    if (message.trim()) {
      socket.emit("chat.message", {
        id: myId,
        message,
      });
      setMessage("");
    }
  };

  return (
    <main className="container">
      <ul className="messages-list">
        {messages.map((msg: any, index: number) => {
          return (
            <li
              className={`messages-list__message messages-list__message--${
                msg.id === myId ? "mine" : "others"
              }`}
              key={index}
            >
              <span>{msg.message}</span>
            </li>
          );
        })}
      </ul>

      <form className="form" onSubmit={handleFormSubmit}>
        <input
          type="text"
          value={message}
          className="form__field"
          onChange={handleMessage}
          placeholder="Type a message"
        />
      </form>
    </main>
  );
};

export default Chat;
