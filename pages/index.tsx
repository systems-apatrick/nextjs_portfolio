import Nav from "@/components/Nav";
import NavMobile from "@/components/NavMobile";
import React, { useState } from "react";

const HomePage = () => {
  const [showNav, setshowNav] = useState(false);
  const showNavHandler =() => setshowNav(true);
  const closeNavHandler =() => setshowNav(false);

  return (
    <div className="overflow-hidden">
      <NavMobile showNav={showNav} closeNav={closeNavHandler}/>
      <Nav openNav={showNavHandler} />
    </div>
  );
};
export default HomePage;
