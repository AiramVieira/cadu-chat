import React, { useEffect, useState } from "react";
import "./User.css";
import user from "../../assets/img/user.png";
import useDebounce from "../../hooks/Debounce";

export const User = () => {
  const [url, setUrl] = useState("");
  const [username, setUsername] = useState("");

  const debounceSearch = useDebounce(username, 500);

  function storeUser() {
    localStorage.setItem("currentUser", username);
  }

  useEffect(() => {
    const storedUser = localStorage.getItem("currentUser");
    if (storedUser) setUsername(storedUser);
  }, []);

  useEffect(() => {
    if (debounceSearch) setUrl(`https://github.com/${debounceSearch}.png`);
    else setUrl(user);
  }, [debounceSearch]);

  useEffect(() => {
    if (url) storeUser();
  }, [url]);

  return (
    <div className="user">
      <div className="user__info">
        <img src={url} alt={username} />
        <input
          type="text"
          placeholder="GitHub name"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
    </div>
  );
};
