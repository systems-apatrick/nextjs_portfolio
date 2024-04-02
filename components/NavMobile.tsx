import { XMarkIcon } from "@heroicons/react/16/solid";
import React from "react";

interface Props {
	showNav: boolean;
	closeNav: () => void;
}

const NavMobile = ({ showNav, closeNav }: Props) => {
	const navOpenstyle = showNav ? "translate-x-0" : "translate-x-[-100%]";
	return (
		<div>
			<div
				className={
                    `fixed top-0 ${navOpenstyle} transform transition-all duration-500 z-[10000] left-0 bottom-0 bg-black opacity-70 w-[100vw] h-[100vh]`
				}
			></div>
			<ul
				className={
					`text-white ${navOpenstyle} fixed  flex items-center flex-col justify-center h-[100%] transform transition-all duration-300 delay-300 w-[60%] bg-red-600 space-y-14 z-[10006]`
				}
			>
				<li>
					<a className='nav__link text-[25px] sm:text-[30px]' href='#'>
						Inicio
					</a>
				</li>
				<li>
					<a className='nav__link text-[25px] sm:text-[30px]' href='#'>
						Acerca de mí
					</a>
				</li>
				<li>
					<a className='nav__link text-[25px] sm:text-[30px]' href='#'>
						Servicios
					</a>
				</li>
				<li>
					<a className='nav__link text-[25px] sm:text-[30px]' href='#'>
						Portafolio
					</a>
				</li>
				<li>
					<a className='nav__link text-[25px] sm:text-[30px]' href='#'>
						Contacto
					</a>
				</li>
				<XMarkIcon
					onClick={closeNav}
					className='absolute top-[-1.4rem] right-[1.4rem] w-[2.2rem] h-[2.2rem] text-white'
				></XMarkIcon>
			</ul>
		</div>
	);
};

export default NavMobile;
