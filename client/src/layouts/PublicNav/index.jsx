import smallLogo from "@/assets/images/smallLogo.webp";
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  IoIosList,
  IoIosPaper,
  BsFillQuestionCircleFill,
  TiInfoLargeOutline,
  FaRegEnvelope,
  FaRegEnvelopeOpen,
  FaUserPlus,
  MdCategory,
} from "react-icons/all";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="max-w-7xl mx-auto px-4 pt-2 lg:px-8">
      <div className="relative flex items-center justify-center h-16">
        <div className="hidden ">
          <div className="flex  ml-[45%] lg:mx-7">
            <img className="h-11 w-auto " src={smallLogo} alt="Logo" />
            <span className="text-xl text-black font-damion ml-3 mr-2 pr-3">
              Compra LISTo
            </span>
          </div>
        </div>
        <div className="absolute inset-y-0 right-0 flex items-center md:hidden pt-2">
          <button
            className={`flex flex-col w-6 h-7 border-0 bg-transparent gap-1.5 btn-animation ${
              isOpen ? "open" : ""
            }`}
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="w-full bg-black h-[2px] rounded-md transition-all duration-500 origin-left btn-line"></span>
            <span className="w-full bg-black h-[2px] rounded-md transition-all duration-500 origin-left btn-line"></span>
            <span className="w-full bg-black h-[2px] rounded-md transition-all duration-500 origin-left btn-line"></span>
          </button>
        </div>
        <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
          <div className="hidden sm:block sm:ml-6">
            <div className="flex space-x-4">
              <ul className="flex w-full">
                <Link to="/register">
                  <li className="flex items-center mr-3 p-3 border-b-2 border-transparent hover:border-violet-700 text-slate-900 text-body font-body transition-all duration-300">
                    <FaUserPlus className="mr-4 text-lg text-violet-700 hover:text-green-500" />
                    Registrarse
                  </li>
                </Link>
                <Link to="/">
                  <li className="flex items-center mr-3 p-3 border-b-2 border-transparent hover:border-violet-700 text-slate-900 text-body font-body transition-all duration-300">
                    <TiInfoLargeOutline className="mr-4 text-lg text-violet-700 hover:text-green-500" />
                    <span className="border-b-2 border-transparent hover:border-gradient-violet-green">
                      Sobre nosotros
                    </span>
                  </li>
                </Link>
                <Link to="/">
                  <li className="flex items-center mr-3 p-3 border-b-2 border-transparent hover:border-violet-700 text-slate-900 text-body font-body transition-all duration-300">
                    <FaRegEnvelope className="mr-4 text-lg text-violet-700 hover:text-green-500" />
                    <span className="border-b-2 border-transparent hover:border-gradient-violet-green">
                      Contactanos
                    </span>
                  </li>
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`${
          isOpen ? "block" : "hidden"
        } lg:hidden absolute bg-white w-full left-0 z-20`}
      >
        <div className="px-2 pt-5 pb-3 space-y-1">
          <ul className="w-full">
            <Link to="/home">
              <li className="flex items-center mr-3 p-3 rounded-full text-slate-900 hover:bg-slate-200 text-body font-body">
                <MdCategory className="mr-3.5 text-violet-700" /> Home
              </li>
            </Link>
            <Link to="/">
              <li className="flex items-center mr-3 p-3 rounded-full text-slate-900 hover:bg-slate-200 text-body font-body">
                <TiInfoLargeOutline className="mr-3.5 text-violet-700" /> About
              </li>
            </Link>
            <Link to="/">
              <li className="flex items-center mr-3 p-3 rounded-full text-slate-900 hover:bg-slate-200 text-body font-body">
                <FaRegEnvelope className="mr-3.5 text-violet-700" /> Contact
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
