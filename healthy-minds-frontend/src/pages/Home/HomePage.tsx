import "./HomePage.css";
import MissionStatement from "./MissionStatement";
import { Routes, Route } from "react-router-dom";
import Testimonials from "./Testimonials";
import Footer from "./Footer";
import Nav from "./Nav";
import Intro from "./Intro";

const HomePage = () => {
  return (
    <div>
      <Nav />
      <Intro />
      <MissionStatement />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default HomePage;
