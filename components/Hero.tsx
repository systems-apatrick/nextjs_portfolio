import React from "react";
import TypeWriteEffect from "./Helper/TypeWriteEffect";
import Image from "next/image";

const Hero = () => {
	return (
		<div className='w-[100vw] pt-[4vh] md:pt-[12vh] h-[85vh] md:h-[100vh] custom-bg '>
			<div className='flex justify-center flex-col w-[80%] h-[100%] mx-auto'>
				<div className='grid grid-cols-1 md:grid-cols-2 gap-[3rem] items-center'>
					<div>
						<h1 className='text-[#c4cfde] mb-[1.3rem]'>
						¡BIENVENIDO A MI MUNDO!
						</h1>
						<div>
							<h1 className='x1:text-[50px] lg:text-[40px] sm:text-[35px] text-[25px] font-semibold leading-[2.6rem] text-white'>
							¡Hola! Soy <span className='text-blue-500'>Patricio Fajardo</span>
							</h1>
							<TypeWriteEffect />
						</div>
						<p className='mt-[1.2rem] text-[15px] md:text-[17px] text-[#c4cfde]'>
							Soy un persona apasionada de la tecnología,
							especializado en desarrollo de sistemas web y aplicaciones
							móviles. Con formación como Ingeniero de Sistemas de la
							Universidad de Cuenca, he liderado proyectos reales y académicos
							durante mi trayectoria universitaria. Manteniéndome al día con las
							últimas tendencias tecnológicas, mi objetivo es ayudar a personas
							y empresas a materializar sus ideas innovadoras con las mejores
							soluciones tecnológicas disponibles.
						</p>
						<div className='mt-[2rem] flex items-center space-x-6'>
							<button
								className='relative flex h-[50px] w-40 items-center justify-center font-semibold 
							overflow-hidden bg-blue-500 text-white shadow-2x1 transition-all before:absolute before:h-0 before:w-0 
							before:rounded-full before:bg-blue-900 before:duration-500 
							before:ease-out hover:before:h-56 hover:before:w-56'
							>
								<span className='relative z-10'>Clic aqui</span>
							</button>
							<button
								className='before:ease relative h-12 w-40 overflow-hidden bg-blue-600 text-white 
							font-semibold shadow-2x1 before:absolute before:left-0 before:-ml-2 before:h-48 before:w-48 
							before:origin-top-right	before:-translate-x-full before:translate-y-12 before:-rotate-90 
							before:bg-green-700 before:transition-all before:duration-300 hover:text-white hover:shadow-black
							 hover:before:-rotate-180 '
							>
								<span className='relative z-10'>Descargar CV</span>
							</button>
						</div>
					</div>
					<div className='hidden md:block'>
						<Image
							src='/images/perfilPatrick.jfif'
							alt='hero'
							width={300}
							height={300}
							className='object-contain'
						></Image>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
