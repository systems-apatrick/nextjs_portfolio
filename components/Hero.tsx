import React from "react";
import TypeWriteEffect from "./Helper/TypeWriteEffect";
import Image from "next/image";
import { colors } from "./Config/Colors";
import { configs } from "./Config/Config";

const Hero = () => {
  return (
    <div className="w-[100vw] pt-[4vh] md:pt-[12vh] h-[85vh] md:h-[100vh] custom-bg ">
      <div className="flex justify-center flex-col w-[80%] h-[100%] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[3rem] items-center">
          <div>
            <h1 className="text-[#c4cfde] mb-[1.3rem]">
              ¡BIENVENIDO A MI MUNDO!
            </h1>
            <div>
              <h1 className="x1:text-[50px] lg:text-[40px] sm:text-[35px] text-[25px] font-semibold leading-[2.6rem] text-white">
                ¡Hola! Soy{" "}
                <span style={{ color: colors.primary }}>Patricio Fajardo</span>
              </h1>
              <TypeWriteEffect />
            </div>
            <p className="mt-[1.2rem] text-[15px] md:text-[17px] text-[#c4cfde]">
              Soy una persona apasionada por la tecnología, especializada en
              desarrollo de sistemas web y aplicaciones móviles, con experiencia
              en liderar proyectos reales y académicos. Me mantengo al día con
              las tendencias tecnológicas para ayudar a personas y empresas a
              convertir sus ideas innovadoras en soluciones efectivas.
            </p>
            <div className="mt-[2rem] flex items-center space-x-6">
              <button
                className="relative flex h-[50px] w-40 items-center justify-center font-semibold 
							overflow-hidden bg-blue-500 text-white shadow-2x1 transition-all before:absolute before:h-0 before:w-0 
							before:rounded-full before:bg-blue-900 before:duration-500 
							before:ease-out hover:before:h-56 hover:before:w-56"
              >
                <span className="relative z-10">Clic aqui</span>
              </button>
              <a
                href={configs.cvFilePath}
                download={configs.cvFileName}
                className="inline-block"
              >
                <button
                  className={`before:ease relative h-12 w-40 overflow-hidden ${colors.primary} text-white 
							font-semibold shadow-2x1 before:absolute before:left-0 before:-ml-2 before:h-48 before:w-48 
							before:origin-top-right	before:-translate-x-full before:translate-y-12 before:-rotate-90 
							before:${colors.secondary} before:transition-all before:duration-300 hover:text-white hover:shadow-black
							 hover:before:-rotate-180`}
                >
                  <span className="relative z-10">Descargar CV</span>
                </button>
              </a>
            </div>
          </div>
          <div className="hidden md:block">
            <Image
              src="/images/PERFIL_PATRICK.gif"
              alt="hero"
              layout="responsive"
              width={100}
              height={100}
              className="object-contain text-center"
            ></Image>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
