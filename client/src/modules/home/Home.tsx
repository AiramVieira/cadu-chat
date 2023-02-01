import { Footer } from "../footer/Footer";
import { Header } from "../header/Header";
import { Outlet } from "react-router-dom";
import "./Home.css";
import { useState } from "react";

export const Home = () => {
  const [size, setSize] = useState<number>(window.innerWidth);

  window.addEventListener("resize", handleResize);

  function handleResize() {
    setSize(window.innerWidth);
  }

  return (
    <div className="home">
      {size > 600 ? <Header inverted={false} /> : null}
      <Outlet />
      {size <= 600 ? <Header inverted={true} /> : null}
    </div>
  );
};
