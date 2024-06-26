import AboutMe from "@/components/AboutMe";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import NavMobile from "@/components/NavMobile";
import Price from "@/components/Price";
import Projects from "@/components/Projects";
import Reviews from "@/components/Reviews";
import Services from "@/components/Services";
import Skills from "@/components/Skills";
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
      <Skills/>
      <Projects/>
      <Price/>
      <Reviews/>
      <Blog/>
      <Contact/>
      <Footer/>
    </div>
  );
};
export default HomePage;
