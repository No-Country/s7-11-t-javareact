import { useState } from "react";
import NewProductForm from "./newProductForm";

function ExpressTab() {
  const [dailyProducts, setDailyProducts] = useState([
    { id: 1, name: "Leche", checked: false },
    { id: 2, name: "Pan", checked: false },
    { id: 3, name: "Huevos", checked: false },
  ]);
  const [selectedProducts, setSelectedProducts] = useState([]);

  const controlProductCheck = (id) => {
    const updatedProducts = dailyProducts.map((product) =>
      product.id === id ? { ...product, checked: !product.checked } : product
    );
    setDailyProducts(updatedProducts);
  };

  const controlDoneClick = () => {
    const selected = dailyProducts.filter((product) => product.checked);
    setSelectedProducts(selected);
    console.log(selected);
  };

  const addProductClick = (productName) => {
    if (productName.trim() !== "") {
      const newId = dailyProducts.length + 1;
      const newproduct = { id: newId, name: productName, checked: false };
      setDailyProducts([...dailyProducts, newproduct]);
    }
  };

  return (
    <section className="flex flex-col gap-10">
      <ul className="">
        {dailyProducts.map((product) => (
          <li key={product.id} className="flex products-center">
            <input
              type="checkbox"
              id={product.id}
              checked={product.checked}
              onChange={() => controlProductCheck(product.id)}
            />
            <label htmlFor={product.id} className="ml-2">
              {product.name}
            </label>
          </li>
        ))}
      </ul>
      <NewProductForm addProduct={addProductClick} />
      <div className="">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
          onClick={controlDoneClick}
        >
          Listo
        </button>
      </div>
    </section>
  );
}

export default ExpressTab;
