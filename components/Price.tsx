import React from "react";
import PriceCard from "./Helper/PriceCard";

const Price = () => {
	return (
		<div className='pt-[5rem] pb-[3rem] bg-black'>
			<div className="text-center">
                <p className="heading__mini">Popular Services</p>
                <h1 className="heading__primary">
                    Best <span className="text-blue-300">Pricing</span> for your proyects
                </h1>
            </div>
            <div className="w-[100%] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 items-center pt-[4rem] md:pt-[7rem]">
                <PriceCard plane='Basic' price='10$' save='24%' bg='bg-red'/>
            </div>
		</div>
	);
};

export default Price;
