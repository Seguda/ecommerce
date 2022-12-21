import React from "react";
import { Announcements } from "../components/Announcements";
import { Categories } from "../components/Categories";
import NavBar from "../components/NavBar";
import { Slider } from "../components/Slider";
import { Products } from "../components/Products";

const Home = () => {
  return (
    <div className="container">
      <Announcements />
      <NavBar />
      <Slider />
      <Categories />
      <Products />
    </div>
  );
};

export default Home;
