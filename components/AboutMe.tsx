import { CheckIcon } from "@heroicons/react/16/solid";
import React from "react";

const AboutMe = () => {
	return (
		<div className='mt-[-3rem] bg-black pb-[3rem]'>
			<div className='w-[80%] pt-[5rem] sm:pt-[7rem] md:pt-[10rem] mx-auto grid items-center grid-cols-1 lg:grid-cols-2 gap-[2rem]'>
				<div>
					<p className='heading__mini'>About me</p>
					<h1 className='heading__primary'>
						Profesional <span className='text-blue-400'>WebSite</span> for you
						bussinnes
					</h1>
					<p className='text-[15px] mt-[1.3rem] text-white opacity-75'>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil
						dolore reprehenderit consequatur voluptatum iste excepturi debitis,
						dicta temporibus rem. Voluptates possimus praesentium ea placeat
						expedita dolores enim voluptate, officiis beatae.
					</p>
					<div className='mt-[2rem] space-y-3'>
						<div className='flex items-center space-x-4'>
              <CheckIcon className="w-[2rem] h-[2rem] text-blue-400"></CheckIcon>
              <p className="text-[18px] text-white">FrontEnd Developer</p>
            </div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AboutMe;
