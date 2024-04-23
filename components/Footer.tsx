import { EnvelopeIcon, MapIcon, PhoneIcon } from "@heroicons/react/16/solid";
import React from "react";

const Footer = () => {
	return (
		<div className='pt-[5rem] pb-[5rem] bg-black'>
			<div className='w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2rem] border-b-[1.4px] pb-5 border-gray-600 border-opacity-40'>
				<div>
					<div className='font-logo text-white text-[18px]'>
						<span className='text-[30px] md:text-[40px] text-blue-400'>
							DEV
						</span>
						Patrick
					</div>
					<h1 className='text-[14px] mt-[0.5rem] text-white text-opacity-70'>
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa
						nobis voluptatibus excepturi obcaecati odio. Adipisci sit magni
						deserunt nihil, tempora officiis quas pariatur ipsum rem non atque,
						eos iure ab.
					</h1>
					<p className='mt-[1.3rem] text-blue-300 underline font-semibold'>
						apatricio.fajardoc@gmail.com
					</p>
				</div>
				<div className='md:mx-auto '>
					<h1 className='text-white font-semibold mb-[1.4rem] text-[17px]'>
						Quick link
					</h1>
					<p className='text-[15px] text-white opacity-80 mb-[0.5rem] cursor-pointer hover:text-blue-500'>
						About
					</p>
					<p className='text-[15px] text-white opacity-80 mb-[0.5rem] cursor-pointer hover:text-blue-500'>
						Services
					</p>
					<p className='text-[15px] text-white opacity-80 mb-[0.5rem] cursor-pointer hover:text-blue-500'>
						Project
					</p>
					<p className='text-[15px] text-white opacity-80 mb-[0.5rem] cursor-pointer hover:text-blue-500'>
						contact
					</p>
				</div>
				<div className='lg:mx-auto'>
					<h1 className='text-white font-semibold mb-[1.4rem] text-[17px]'>
						Address
					</h1>
                    <div className="flex items-center mt-[1rem] space-x-2">
                        <MapIcon className="w-[1rem] h-[1rem] text-blue-300"/>
                        <p className="text-[17px] font-normal text-white opacity-75">Ecuador, Cuenca</p>
                    </div>
                    <div className="flex items-center mt-[1rem] space-x-2">
                        <EnvelopeIcon className="w-[1rem] h-[1rem] text-blue-300"/>
                        <p className="text-[17px] font-normal text-white opacity-75">apatricio.fajardoc@gmail.com</p>
                    </div>
                    <div className="flex items-center mt-[1rem] space-x-2">
                        <PhoneIcon className="w-[1rem] h-[1rem] text-blue-300"/>
                        <p className="text-[17px] font-normal text-white opacity-75">+593 967628197</p>
                    </div>
				</div>
			</div>
            <div className="mt-[1.4rem] w-[80%] mx-auto text-white opacity-70  ">
                &#169; Copyright devpatrick - 2024
            </div>
		</div>
	);
};

export default Footer;
