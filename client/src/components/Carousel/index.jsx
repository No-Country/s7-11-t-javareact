import React, { useState, useEffect } from "react";
import Card from "../Card"
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Carousel = () => {
  const [currentCategory, setCurrentCategory] = useState(0);
  const [intervalTime, setIntervalTime] = useState(2000); // Intervalo de tiempo por defecto: 2 segundos

  const nextCategory = () => {
    setCurrentCategory((currentCategory + 1) % categoryDetails.length);
    setIntervalTime(60000); // Cambia el intervalo de tiempo a 1 minuto después de hacer clic en "siguiente"
  };

  const prevCategory = () => {
    setCurrentCategory(
      (currentCategory + categoryDetails.length - 1) % categoryDetails.length
    );
    setIntervalTime(60000); // Cambia el intervalo de tiempo a 1 minuto después de hacer clic en "anterior"
  };

  const categoryDetails = [
    {
      img: "https://source.unsplash.com/m75zUxR",
      category: "lorem1",
      categoryDescription: "Nullam nec eros euismod, dignissim eros a, bibendum ex.",
    },
    {
      img: "https://source.unsplash.com/l2Qk0zk",
      category: "lorem2",
      categoryDescription: "Nunc id elit consequat, mattis justo in, faucibus arcu.",
    },
    {
      img: "https://source.unsplash.com/dwgcA1I",
      category: "lorem3",
      categoryDescription: "Suspendisse sit amet turpis volutpat, gravida ex a",
    },
    {
      img: "https://source.unsplash.com/Cvn1kyH",
      category: "lorem4",
      categoryDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      img: "https://source.unsplash.com/4xuxzZC",
      category: "lorem5",
      categoryDescription: "Pellentesque habitant morbi tristique senectus et netus et",
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
    <div className="flex px-5px">
      <div className="flex space-x-2">
        <div className="self-center">
          <button onClick={prevCategory} className="text-2xl">
            <IoIosArrowBack />
          </button>
        </div>
        {categoryDetails
          .slice(currentCategory, currentCategory + 1)
          .map((category) =>
(
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