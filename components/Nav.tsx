import React from 'react'

const Nav = () => {
  return (
    <div className='fixed w-[100%] bg-gray-800'>
      <div className='flex items-center h-[12vh] justify-between w-[80%] mx-auto'>
        <div className='font-log text-white text-[18px]'>
          <span className='text-[30px] md:text-[40px] text-blue-400'>DEV</span>PATRICK
        </div>
        <ul className='md:flex hidden items-center space-x-10'>
          <li> <a className='nav__link' href="#">Inicio</a></li>
          <li> <a className='nav__link' href="#">Acerca de mí</a></li>
          <li> <a className='nav__link' href="#">Servicios</a></li>
          <li> <a className='nav__link' href="#">Portafolio</a></li>
          <li> <a className='nav__link' href="#">Contacto</a></li>
        </ul>
        <Bar3CenterLeftIcon></Bar3CenterLeftIcon>
      </div>
    </div>
  )
}

export default Nav