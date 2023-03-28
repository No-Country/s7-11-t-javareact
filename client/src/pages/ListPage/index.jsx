import { useState } from "react";
const ListPage = () => {
  const [isExpress, setIsExpress] = useState(true);
  const [dailyProducts, setDailyProducts] = useState([
    { id: 1, name: "Leche", checked: false },
    { id: 2, name: "Pan", checked: false },
    { id: 3, name: "Huevos", checked: false },
  ]);
  const [newProductName, setNewProductName] = useState("");
  const [selectedProducts, setSelectedProducts] = useState([]);

  const controlTabClick = (isExpress) => {
    setIsExpress(isExpress);
  };

  const changeProductName = (e) => {
    setNewProductName(e.target.value);
  };

  const addProductClick = () => {
    if (newProductName.trim() !== "") {
      const newId = dailyProducts.length + 1;
      const newproduct = { id: newId, name: newProductName, checked: false };
      setDailyProducts([...dailyProducts, newproduct]);
      setNewProductName("");
    }
  };

  const controlProductCheck = (id) => {
    const  updatedProducts = dailyProducts.map((product) =>
      product.id === id ? { ...product, checked: !product.checked } : product
    );
    setDailyProducts( updatedProducts);
  };

  const controlDoneClick = () => {
    const selected = dailyProducts.filter((product) => product.checked);
    setSelectedProducts(selected);
    console.log(selected);
  };
  
  return (
    <div className="grid grid-cols-2 gap-4">
      <button
        className={`${isExpress ? "bg-gray-300" : "bg-white"}
            border border-gray-300 rounded-md py-2 px-4 font-medium text-gray-700`}
        onClick={() => controlTabClick(true)}
      >
        Compra Express
      </button>
      <button
        className={`${isExpress ? "bg-white" : "bg-gray-300"}
            border border-gray-300 rounded-md py-2 px-4 font-medium text-gray-700`}
        onClick={() => controlTabClick(false)}
      >
        Compra Grande
      </button>
      <div className="col-span-2 mt-4">
        {isExpress ? (
          <div>
            <ul className="list-disc list-inside h-40 overflow-y-scroll">
              {dailyProducts.map((product) => (
                <li key={product.id} className="flex products-center my-2">
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
            <div className="mt-4 flex">
              <input
                type="text"
                placeholder="Agregar nuevo product"
                className="border rounded-l-md px-2 py-1 flex-grow"
                value={newProductName}
                onChange={changeProductName}
              />
              <button
                className="bg-green-500 text-white px-4 py-1 rounded-r-md"
                onClick={addProductClick}
              >
                Agregar
              </button>
            </div>
            <div className="mt-4">
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded-md"
                onClick={controlDoneClick}
              >
                Listo
              </button>
            </div>
          </div>
        ) : (
          <div className="bg-gray-200 rounded-md p-4">
            <select className="w-full border border-gray-300 rounded-md py-2 px-4">
              <option value="">Selecciona una opción</option>
              <option value="meat">Carnicería</option>
              <option value="produce">Verdulería</option>
              <option value="dairy">Lácteos</option>
              <option value="bakery">Panadería</option>
            </select>
          </div>
        )}
      </div>
    </div>
  );
};

export default ListPage;
