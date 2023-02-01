import React, { useEffect } from "react";
import "./Header.css";
import { CiUser } from "react-icons/ci";
import { BsChatDots } from "react-icons/bs";
import { Link } from "react-router-dom";

export const Header = () => {
  useEffect(() => {
    const list = document.querySelectorAll(".list");
    function activeLink() {
      list.forEach((item) => item.classList.remove("active"));
      this.classList.add("active");
    }

    list.forEach((item) => item.addEventListener("click", activeLink));
  }, []);

  return (
    <div className="navigation">
      <ul>
        <li className="list active">
          <Link to={`user`}>
            <span className="text">User</span>
            <span className="icon">
              <CiUser></CiUser>
            </span>
          </Link>
        </li>
        <li className="list">
          <Link to={`chat`}>
            <span className="text">Chats</span>
            <span className="icon">
              <BsChatDots></BsChatDots>
            </span>
          </Link>
        </li>
        <div className="indicator"></div>
      </ul>
    </div>
  );
};
