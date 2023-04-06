import React from 'react';

const NavBar = () => {
    return (
        <div className='w-full'>
           <nav className="flex flex-wrap items-center justify-between px-2 py-3 bg-white">
  <div className="flex items-center mr-4">
    <img
      className="h-8 w-auto sm:h-10"
      src="https://res.cloudinary.com/dw639wmis/image/upload/v1680807861/selected_1_1_x1ocsl.png"
      alt="Workflow"
    />
    <span className="text-xl font-bold text-black ml-2">Compra LISTo</span>
  </div>
  <div className="block lg:hidden">
    <button className="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-white hover:border-white">
      <svg
        className="h-3 w-3 fill-current"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>Menu</title>
        <path d="M0 3a3 3 0 013-3h14a3 3 0 110 6H3a3 3 0 01-3-3zM0 10a3 3 0 013-3h14a3 3 0 110 6H3a3 3 0 01-3-3zM3 17a3 3 0 100 6h14a3 3 0 100-6H3z" />
      </svg>
    </button>
  </div>
  <div className="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden mt-2 lg:mt-0 lg:justify-end">
    <div className="text-sm lg:flex-grow">
      <a
        href="#responsive-header"
        className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-gray-400 mr-4"
      >
        Home
      </a>
      <a
        href="#responsive-header"
        className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-gray-400 mr-4"
      >
        My Lists
      </a>
      <a
        href="#responsive-header"
        className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-gray-400"
      >
        About
      </a>
    </div>
    <div>
      <a
        href="#"
        className="inline-block text-sm px-4 py-2 leading-none border rounded text-black border-white hover:border-transparent hover:text-gray-500 hover:bg-white mt-4 lg:mt-0"
      >
        Sign Up/Out
      </a>
    </div>
  </div>
</nav>
 
        </div>
    );
};

export default NavBar;