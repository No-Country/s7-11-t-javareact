import smallLogo from "../../assets/images/smallLogo.png";
import { useState } from "react";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-transparent">
      <div className="max-w-7xl mx-auto px-4 pt-2 lg:px-8">
        <div className="relative flex items-center justify-center h-16">
          <div className="flex ml-[45%] lg:ml-3">
            <img className="h-8 w-auto sm:h-10" src={smallLogo} alt="Logo" />
            <span className="hidden lg:block text-xl font-bold text-black font-poppins ml-3 mr-2 pr-3">
              Compra LISTo
            </span>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
            <button
              className={`flex flex-col w-5 h-5 border-0 bg-transparent gap-1 btn-animation ${
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
                <a
                  href="/home"
                  className="text-black  hover:bg-[#DAEDFF] px-3 py-2 rounded-md text-sm font-medium"
                >
                  Home
                </a>
                <a
                  href="/"
                  className="text-black hover:bg-[#DAEDFF] px-3 py-2 rounded-md text-sm font-medium"
                >
                  About
                </a>
                <a
                  href="/"
                  className="text-black hover:bg-[#DAEDFF] px-3 py-2 rounded-md text-sm font-medium"
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
        </div>

        <div
          className={`${
            isOpen ? "block" : "hidden"
          } lg:hidden absolute bg-white w-full left-0 `}
        >
          <div className="px-2 pt-5 pb-3 space-y-1">
            <a
              href="/home"
              className="text-black hover:bg-[#DAEDFF] block px-3 py-2 rounded-md text-base font-medium"
            >
              Home
            </a>
            <a
              href="/"
              className="text-black hover:bg-[#DAEDFF] block px-3 py-2 rounded-md text-base font-medium"
            >
              About
            </a>
            <a
              href="/"
              className="text-black hover:bg-[#DAEDFF] block px-3 py-2 rounded-md text-base font-medium"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
