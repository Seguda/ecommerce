import React from "react";
import { Announcements } from "../components/Announcements";
import NavBar from "../components/NavBar";
import { Slider } from "../components/Slider";

const Home = () => {
  return (
    <div className="container">
      <Announcements />
      <NavBar />
      <Slider />
    </div>
  );
};

export default Home;
