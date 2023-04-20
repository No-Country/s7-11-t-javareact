import React from "react";
import { FaWhatsapp, FaDiscord, FaLinkedin } from "react-icons/fa";

const Footer = () => (
  <footer className="bg-[#381c09] text-white border-gradient-to-b from-gray-400 to-orange-500 w-full max-[411px]:hidden">
    <div className="flex flex-col justify-items-end lg:flex-row lg:justify-around mx-auto pt-3 lg:py-6 px-2 sm:px-4 md:px-6 lg:px-10">
      <div className="lg:grid lg:grid-cols-3 lg:gap-8">
        <div className="footer-widget hidden lg:block lg:h-full">
          <h4 className="text-lg font-medium mb-4">Newsletter</h4>
          <p className="mb-4">
            Suscríbete a nuestro boletín para recibir las últimas actualizaciones y
            promociones.
          </p>
          <form className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
            <input
              type="email"
              placeholder="Correo electrónico"
              className="bg-white rounded-lg py-2 px-3 text-gray-800 w-full sm:w"
            />
            <button
              type="submit"
              className="bg-white text-orange-500 rounded-lg py-2 px-4 hover:bg-gray-300 transition-colors duration-300"
            >
              Suscribirse
            </button>
          </form>
        </div>
        <div className="footer-widget lg:h-full ">
          <h4 className="text-lg font-medium mb-4">¿Quienes somos?</h4>
          <p className="mb-4 lg:hidden">
            Nuestro objetivo es brindarte una experiencia de compra fácil,
            rápida y segura.

          </p><p className="hidden lg:block mb-4 text-base">
              Una de nuestros principales objetivos es asegurarnos de que
              disfrutes cada paso del proceso de compra para que siempres te sientas
              seguro y satisfecho. <br />¡Gracias por confiar en nosotros!
              <a href="#" className="ml-3 underline hover:text-white ">
                Más información
              </a>
            </p>
        </div>

        <div className="footer-widget space-x-4 lg:h-full">
          <div className="lg:flex-col w-full">
            <h4 className="text-lg font-medium mb-4 ">Contacto</h4>

            <ul className="space-y-2 hidden lg:block">
              <li>
                <a href="#" className="hover:text-white ">
                  Soporte
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Reportar un problema
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Sugerencias
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex-col md:w-full">
        <div className="flex space-x-4 pb-3 lg:pb-0">
          <a
            href="https://wa.me/123456789"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp className="text-white hover:text-gray-300" size={24} />
          </a>
          <a
            href="https://discord.gg/abcde"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaDiscord className="text-white hover:text-gray-300" size={24} />
          </a>
          <a
            href="https://www.linkedin.com/company/compralisto"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-white hover:text-gray-300" size={24} />
          </a>
        </div>
        <div className="border-t border-gray-400 lg:pt-8 lg:mt-8 sm:flex sm:justify-around lg:justify-start lg:p-0 box-border">
          <div className="hidden lg:block"></div>
          <p className="text-sm text-gray-400 my-2 lg:mb-2 lg:my-0 lg:ml-0 ml-10 p-0">
            &copy; 2023 Compra Listo. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </div>
  </footer>
);
export default Footer;
