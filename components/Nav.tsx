import { Bars3CenterLeftIcon } from "@heroicons/react/16/solid";
import React, { useEffect, useState } from "react";
import { Interface } from "readline";

interface Props {
	openNav: () => void;
}

const Nav = ({ openNav }: Props) => {
	const [navSticky, setNavStricky] = useState(false);

	useEffect(() => {
		const handler = () => {
			if (window.scrollY >= 90) {
				setNavStricky(true);
			}

			if (window.scrollY < 90) {
				setNavStricky(false);
			}
		};
		window.addEventListener("scroll", handler);
	}, []);

  const stickyStyle = navSticky ? "":""

	return (
		<div className={`fixed w-[100%] ${stickyStyle} z-[1000] bg-gray-800`}>
			<div className='flex items-center h-[12vh] justify-between w-[80%] mx-auto'>
				<div className='font-log text-white text-[18px]'>
					<span className='text-[30px] md:text-[40px] text-blue-400'>DEV</span>
					PATRICK
				</div>
				<ul className='md:flex hidden items-center space-x-10'>
					<li>
						{" "}
						<a className='nav__link' href='#'>
							Inicio
						</a>
					</li>
					<li>
						{" "}
						<a className='nav__link' href='#'>
							Acerca de mí
						</a>
					</li>
					<li>
						{" "}
						<a className='nav__link' href='#'>
							Servicios
						</a>
					</li>
					<li>
						{" "}
						<a className='nav__link' href='#'>
							Portafolio
						</a>
					</li>
					<li>
						{" "}
						<a className='nav__link' href='#'>
							Contacto
						</a>
					</li>
				</ul>
				<Bars3CenterLeftIcon
					onClick={openNav}
					className='w-[2.3rem] md:hidden h-[2.3rem] text-white rotate-180'
				></Bars3CenterLeftIcon>
			</div>
		</div>
	);
};

export default Nav;
