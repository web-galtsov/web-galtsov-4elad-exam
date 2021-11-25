import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import {
    bouncingBall,
    stringsAndCalls,
    fillThatBall,
} from "../components/InfoSection/Data";
import Services from "../components/StringsAndCalls";
import BouncingBall from "../components/BouncingBall";
import FillThatBall from "../components/FillThatBall";
function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <BouncingBall {...bouncingBall}/>
      <FillThatBall {...fillThatBall}/>
      <Services {...stringsAndCalls} />
      <Footer />
    </>
  );
}

export default Home;
