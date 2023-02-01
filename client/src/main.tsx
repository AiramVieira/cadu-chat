import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { User } from "./routes/user/User";
import Chat from "./routes/chat/Chat";
import { ChatList } from "./routes/chat-list/ChatList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "user",
        element: <User />,
      },
      {
        path: "chat",
        element: <ChatList />,
      },
      {
        path: "chat/:id",
        element: <Chat />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
