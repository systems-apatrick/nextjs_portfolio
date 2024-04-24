import React from "react";
import { TypeAnimation } from "react-type-animation";

const TypeWriteEffect = () => {
	return (
		<TypeAnimation
			sequence={[
				// Same substring at the start will only be typed out once, initially
				"Desarrollador Web",
				1000, // wait 1s before replacing "Mice" with "Hamsters"
				"Desarrollador Movil",
				1000,
				"Cientifico de datos",
				1000,			
			]}
			wrapper='span'
			speed={50}
            className="xl:text-[50px] lg:text-[40px] sm:text-[35px] text-[25px] text-white font-bold"
			style={{ fontSize: "2em", display: "inline-block" }}
			repeat={Infinity}
		/>
	);
};

export default TypeWriteEffect;
