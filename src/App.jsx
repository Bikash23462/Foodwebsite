import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Hotdessert from "./components/Hotdessert/Hotdessert";
import Banner from "./components/Banner/Banner";
import Popularrecipe from "./components/Popularrecipe/Popularrecipe";
import Testimonial from "./components/Testimonial/Testimonial";

const App = () => {
  return (
    <div className="overflow-x-hidden bg-white2 text-dark">
      <div className="relative overflow-hidden">
        <Navbar></Navbar>
        <Hero></Hero>
      </div>
      <Hotdessert></Hotdessert>
      <Banner></Banner>
      <Popularrecipe></Popularrecipe>
      <Testimonial></Testimonial>
    </div>
  );
};

export default App;
