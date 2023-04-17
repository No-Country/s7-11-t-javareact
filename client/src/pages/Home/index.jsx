import React from "react";
import { Link } from "react-router-dom";
import ListCard from "../../components/ListCard";

const Home = () => {
  const recentLists = [
    { id: 1, name: "Lista de compras", date: "2 días atrás" },
    { id: 2, name: "Lista de tareas", date: "1 semana atrás" },
    { id: 3, name: "Lista de deseos", date: "2 semanas atrás" },
    { id: 2, name: "Lista de tareas", date: "1 semana atrás" },
    { id: 2, name: "Lista de tareas", date: "1 semana atrás" },
  ];
  const getStorageProducts = localStorage.getItem("selectItemState");
  const parsedData = JSON.parse(getStorageProducts);
  return (
    <div className="z-0 mx-auto p-4 grid grid-cols-1 gap-4 h-full md:grid-cols-2 lg:grid-cols-4">
       <div className="w-full">
        <h1 className="text-2xl font-bold pb-5">Compras recientes express</h1>
        {
        parsedData === null ? <div> No data available</div> : <ul className=" w-full max-h-60 border border-b-2 border-gray-400 rounded-md overflow-x-hidden overflow-y-auto flex flex-col">
        <div className="flex justify-between p-1">
          <h3 className=" font-bold">Producto</h3>
          <h3 className="font-bold">Cantidad</h3>
        </div>
        {parsedData
          .reverse()
          .slice(0, 5)
          .map((product) => (
            <li
              key={product.id}
              className="w-full flex justify-between px-2 py-1"
            >
              <div className="w-72 flex gap-1 justify-start items-center border-r-2 border-black">
                <div>{product.name}</div>
              </div>
              <div className="w-full flex justify-end items-center gap-2 bg-[#ecf6fd]">
                <div>{product.quantity}x</div>
              </div>
            </li>
          ))}
      </ul>
}     
      </div>
      <div className="col-span-full flex justify-between items-center h-full mb-6">
        <div className="flex items-center text-end h-28 w-full bg-contain bg-no-repeat bg-[url('../../assets/images/Cloud.png')]">
          <h1 className="text-center text-2xl font-bold">Listas recientes</h1>
        </div>
        <Link to="/list">
          <div className="w-16 h-16 lg:hidden bg-violet-300 rounded-full flex justify-center items-center cursor-pointer hover:bg-gray-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-plus"
            >
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
          </div>
        </Link>
      </div>
      {recentLists.map((list) => (
        <ListCard
          key={list.id}
          title={list.name}
          subtitle={`Actualizada ${list.date}`}
        />
      ))}
      <Link to="/list">
        <div className="hidden lg:block ">
          <div className="max-w-[22rem] h-28 bg-violet-300 rounded-lg flex justify-center items-center cursor-pointer hover:bg-gray-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-plus"
            >
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Home;
