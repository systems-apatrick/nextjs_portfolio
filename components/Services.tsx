import React from "react";
import ServiceCard from "./Helper/ServiceCard";

const Services = () => {
  return (
    <div className="pt-[5rem] pb-[3rem] bg-[#0b0c13]">
      <div className="text-center">
        <p className="heading__mini">Popular Services</p>
        <h1 className="heading__primary">
          My special <span className="text-blue-300">services</span> for you
        </h1>
      </div>
      <div className="pt-[5rem] w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[3rem] items-center">
        <div>
          <ServiceCard title="React Web site" num="01" />
        </div>
        <div>
          <ServiceCard title="React Web site" num="02" />
        </div>
        <div>
          <ServiceCard title="React Web site" num="03" />
        </div>
        <div>
          <ServiceCard title="React Web site" num="04" />
        </div>
        <div>
          <ServiceCard title="React Web site" num="05" />
        </div>
        <div>
          <ServiceCard title="React Web site" num="06" />
        </div>
      </div>
    </div>
  );
};

export default Services;
