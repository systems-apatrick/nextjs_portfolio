import AboutMe from "@/components/AboutMe";
import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import NavMobile from "@/components/NavMobile";
import Services from "@/components/Services";
import React, { useState } from "react";

const HomePage = () => {
  const [showNav, setshowNav] = useState(false);
  const showNavHandler =() => setshowNav(true);
  const closeNavHandler =() => setshowNav(false);

  return (
    <div className="overflow-hidden">
      <NavMobile showNav={showNav} closeNav={closeNavHandler}/>
      <Nav openNav={showNavHandler} />
      <Hero/>
      <AboutMe/>
      <Services/>
    </div>
  );
};
export default HomePage;
