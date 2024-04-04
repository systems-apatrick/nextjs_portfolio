import React from "react";
import TypeWriteEffect from "./Helper/TypeWriteEffect";

const Hero = () => {
	return (
		<div className='w-[100vw] pt-[4vh] md:pt-[12vh] h-[85vh] md:h-[100vh] custom-bg '>
			<div className='flex justify-center flex-col w-[80%] h-[100%] mx-auto'>
				<div className='grid grid-cols-1 md:grid-cols-2 gap-[3rem] items-center'>
					<div className=''>
						<h1 className='text-[#c4cfde] mb-[1.3rem]'>
							BIENVENIDO A MI MUNDO
						</h1>
						<div>
							<h1 className='x1:text-[50px] lg:text-[40px] sm:text-[35px] text-[25px] font-semibold leading-[2.6rem] text-white'>
								Hola, soy <span className='text-blue-300'>Patrick</span>
							</h1>
							<TypeWriteEffect />
						</div>
						<p className='mt-[1.2rem] text-[15px] md:text-[17px] text-[#c4cfde]'>
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum
							similique in sint nemo, error quos saepe soluta est fugit delectus
							ipsum. Deserunt quidem earum dolore voluptatibus laudantium fugit
							sunt repudiandae.
						</p>
						<div className='mt-[2rem] flex items-center space-x-6'>
							<button
								className='relative  flex h-[50px] w-40 items-center justify-center font-semibold overflow-hidden bg-blue-500 text-white 
							shadow-2x1 transition-all before:absolute before:h-0 before:w before:rounded-full before:bg-red-600 before:duration-500 
							before:ease-out hover:before:h-56'
							>
								<span className='relative z-10'>Clic aqui</span>
							</button>
							<button className="before:ease relative h-12 w-40 overflow-hidden bg-orange-600 text-white font-semibold shadow-2x1 ">CV</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
