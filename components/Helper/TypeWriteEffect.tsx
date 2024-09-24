import React from "react";
import { TypeAnimation } from "react-type-animation";
import { colors } from "../Config/Colors";

const TypeWriteEffect = () => {
  return (
    <>
      <div
        className="xl:text-[50px] lg:text-[40px] sm:text-[35px] text-[25px]  font-bold"
        style={{
          color: colors.primary,
          fontSize: "3.5em",
          display: "inline-block",
        }}
      >
        <TypeAnimation
          sequence={[
            "Desarrollador Web",
            1000,
            "Desarrollador Móvil",
            1000,
            "Científico de datos",
            1000,
          ]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
        />
      </div>
    </>
  );
};

export default TypeWriteEffect;
