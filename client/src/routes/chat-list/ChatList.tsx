import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { FiPlus } from "react-icons/fi";
import { Form } from "../../modules/form/Form";
import "./ChatList.css";

interface IChat {
  description: string;
  id: number;
}

export const ChatList = () => {
  const fakeChats: IChat[] = [
    { description: "Chat 01", id: 0 },
    { description: "Chat 02", id: 1 },
    { description: "Chat 03", id: 2 },
    { description: "Chat 04", id: 3 },
    { description: "Chat 05", id: 4 },
    { description: "Chat 06", id: 5 },
    { description: "Chat 07", id: 6 },
    { description: "Chat 08", id: 7 },
  ];

  const [showForm, setShowForm] = useState<boolean>(false);

  const [chats, setChats] = useState<IChat[]>([...fakeChats]);

  function openChat(id: number) {
    console.log(id);
  }

  function deleteChat(chat: IChat) {
    const arr = chats;
    arr.splice(chats.indexOf(chat), 1);
    setChats([...arr]);
  }

  function displayForm(show: boolean) {
    setShowForm(show);

    const btn = document.getElementById("new-chat");
    if (btn?.classList.contains("active") && !show)
      btn.classList.remove("active");
    else btn?.classList.add("active");
  }

  return (
    <div className="chatlist-container">
      <div className="chats">
        {chats.map((chat) => {
          return (
            <div className="card" key={chat.id}>
              <span onClick={(_) => openChat(chat.id)}>{chat.description}</span>
              <span onClick={(_) => deleteChat(chat)}>
                <FaTimes />
              </span>
            </div>
          );
        })}
      </div>
      <div className="new-chat" id="new-chat">
        {showForm ? (
          <Form closeForm={(_: never) => displayForm(false)} />
        ) : (
          <FiPlus onClick={(_: never) => displayForm(true)} />
        )}
      </div>
    </div>
  );
};
