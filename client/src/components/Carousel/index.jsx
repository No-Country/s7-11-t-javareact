import React, { useState, useEffect } from "react";
import Card from "../Card";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Carousel = () => {
  const [currentCategory, setCurrentCategory] = useState(0);
  const [intervalTime, setIntervalTime] = useState(5000);
  const nextCategory = () => {
    setCurrentCategory((currentCategory + 1) % categoryDetails.length);
    setIntervalTime(60000);
  };

  const prevCategory = () => {
    setCurrentCategory(
      (currentCategory + categoryDetails.length - 1) % categoryDetails.length
    );
    setIntervalTime(60000);
  };

  const categoryDetails = [
    {
      img: "https://i.postimg.cc/7ZFVdHHH/3887312-11697.jpg",
      category: "Ordena tus compras en un solo lugar",
      categoryDescription: "Agrega listas y ordena tus compras rápido y fácil",
    },
    {
      img: "https://i.postimg.cc/2STDzKtB/familia.jpg",
      category: "Agrega tus compas del hogar",
      categoryDescription:
        "Compras grandes o rápidas, guardalas en un solo lugar",
    },
    {
      img: "https://i.postimg.cc/PJF3q0D2/fam.jpg",
      category: "Edita, crea y elimina tus compras",
      categoryDescription:
        "Actualiza tus lista cuantas veces desees en cualquier lugar",
    },
    {
      img: "https://i.postimg.cc/L687t36z/mujer.jpg",
      category: "Controla tu presupuesto de tus compras",
      categoryDescription:
        "¡Cuentas claras y rápidas para tus presupuestos en una sola app!",
    },
    {
      img: "https://i.postimg.cc/Sx8yX1bx/pareja.jpg",
      category: "Comparte la lista de tus compras",
      categoryDescription:
        "Con las personas que desees, fácil y rápido. ¡Todo en uno!",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCategory((currentCategory + 1) % categoryDetails.length);
      setIntervalTime(3000); // Restaura el intervalo de tiempo a 2 segundos después de que el intervalo haya transcurrido
    }, intervalTime);
    return () => clearInterval(interval);
  }, [currentCategory, categoryDetails.length, intervalTime]);

  return (
    <div className="flex pt-4 lg:w-full lg:h-full">
      <div className="flex lg:space-x-2 w-full h-full">
        <div className="self-center">
          <button onClick={prevCategory} className="text-2xl">
            <IoIosArrowBack />
          </button>
        </div>
        {categoryDetails
          .slice(currentCategory, currentCategory + 1)
          .map((category) => (
            <Card
              key={category.category}
              image={category.img}
              service={category.category}
              paragraph={category.categoryDescription}
            />
          ))}
        <div className="self-center">
          <button onClick={nextCategory} className="text-2xl">
            <IoIosArrowForward />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
