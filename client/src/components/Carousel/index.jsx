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
      img: "https://i.postimg.cc/Gm5q470B/Image-generated-1681709144-2.webp",
      category: "Ordena tus compras en un solo lugar",
      categoryDescription: "Agrega listas y ordena tus compras rápido y fácil",
    },
    {
      img: "https://i.postimg.cc/N0N9sVZV/Image-generated-1681709252-3.webp",
      category: "Agrega tus compas del hogar",
      categoryDescription:
        "Compras grandes o rápidas, guardalas en un solo lugar",
    },
    {
      img: "https://i.postimg.cc/2j0vjqNy/Image-generated-1681709455-2.webp",
      category: "Edita, crea y elimina tus compras",
      categoryDescription:
        "Actualiza tus lista cuantas veces desees en cualquier lugar",
    },
    {
      img: "https://i.postimg.cc/63j3Kv4N/Image-generated-1681709598-3.webp",
      category: "Controla tu presupuesto de tus compras",
      categoryDescription:
        "¡Cuentas claras y rápidas para tus presupuestos en una sola app!",
    },
    {
      img: "https://i.postimg.cc/g07QPccT/Image-generated-1681709731-3.webp",
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
    <div className="flex py-4 lg:w-full lg:h-full">
    <div className="flex lg:space-x-2 w-full h-full">
      <div className="self-center">
        <button onClick={prevCategory} className="text-2xl opacity-50 hover:opacity-100">
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
        <button onClick={nextCategory} className="text-2xl opacity-50 hover:opacity-100">
          <IoIosArrowForward />
        </button>
      </div>
    </div>
  </div>
  
  );
};

export default Carousel;
