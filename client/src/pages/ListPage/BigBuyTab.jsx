import { useState } from "react";
import { MdAdd, MdDelete } from "react-icons/md";
import { useNavigate } from "react-router-dom";

import ProductListItem from "@/components/ProductListItem";

const CATEGORIES_DATA = [
  {
    id: 1,
    name: "Carnicería",
  },
  {
    id: 2,
    name: "Verdulería",
  },
  {
    id: 3,
    name: "Lácteos",
  },
  {
    id: 4,
    name: "Panadería",
  },
];

const PRODUCTS = [
  { id: 1, name: "Carne de res", price: 5.99, category: 1 },
  { id: 2, name: "Carne de cerdo", price: 3.99, category: 1 },
  { id: 3, name: "Pollo", price: 5.99, category: 1 },
  { id: 4, name: "Lechuga", price: 7.99, category: 2 },
  { id: 5.99, name: "Tomate", price: 5.99, category: 2 },
  { id: 6, name: "Cebolla", price: 5.99, category: 2 },
  { id: 7, name: "Leche", price: 8.99, category: 3 },
  { id: 8, name: "Queso", price: 5.99, category: 3 },
  { id: 9, name: "Yogur", price: 2.99, category: 3 },
  { id: 10, name: "Pan blanco", price: 5.99, category: 4 },
  { id: 11, name: "Pan integral", price: 9.99, category: 4 },
  { id: 12, name: "Pan de ajo", price: 1.99, category: 4 },
];

const groupBy = (items, key) =>
  items.reduce(
    (result, item) => ({
      ...result,
      [item[key]]: [...(result[item[key]] || []), item],
    }),
    {}
  );

const groupProductsByCategory = (productsList) =>
  Object.entries(groupBy(productsList, "category"));

const BigBuyTab = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("");
  const [productsList, setProductsList] = useState([]);

  const addProductHandler = (product) => {
    if (productsList.find((p) => p.id === product.id)) {
      setProductsList(
        productsList.map((p) =>
          p.id === product.id ? { ...p, cuantity: p.cuantity + 1 } : p
        )
      );
      return;
    }
    setProductsList([
      ...productsList,
      { ...product, cuantity: 1, done: false },
    ]);
  };

  const toggleProductDone = (product) =>
    setProductsList(
      productsList.map((p) =>
        p.id === product.id ? { ...p, done: !p.done } : p
      )
    );

  const controlGenerateList = () => {
    // const list = generatedList(products);
    console.log(productsList);
    // aquí se puede enviar la lista a un servidor o mostrarla en una ventana emergente.
    navigate("/list/2");
  };

  const generatedList = (products) => {
    const selectedProducts = products.filter((product) => product.checked);
    return selectedProducts.map((product) => ({ name: product.name }));
  };

  return (
    <main className="">
      <section className="flex flex-col gap-8 w-full">
        <div className="bg-gray-100 rounded-md p-4 ">
          <select
            className="w-full border border-gray-300 rounded-md py-2 px-4"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="" disabled>
              Seleccionar Categoria
            </option>
            {CATEGORIES_DATA.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
          <ul className="h-55 overflow-y-scroll mt-4">
            {PRODUCTS.filter(
              (product) => product.category == selectedCategory
            )?.map((product) => (
              <li key={product.id} className="flex my-2">
                <button
                  className=" bg-gray-200 transition w-full rounded-md flex flex-row justify-between items-center px-3 py-2 border-2 hover:border-gray-500 border-transparent"
                  onClick={() => addProductHandler(product)}
                >
                  {product.name}
                  <MdAdd />
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-4 " role="list">
          {groupProductsByCategory(productsList).map(([category, products]) => (
            <div key={category} role="listitem">
              <h3 className="inline-block  border-b-4 border-gray-200 mb-6 font-semibold">
                {CATEGORIES_DATA.find((c) => c.id == category)?.name}
              </h3>
              <ul className="flex flex-col gap-2">
                {products.map((product, index) => (
                  <ProductListItem
                    key={product.id}
                    product={product}
                    endAdornment={
                      <button
                        className="bg-red-400 px-5 grid place-items-center text-xl"
                        title="delete product"
                      >
                        <MdDelete />
                      </button>
                    }
                  >
                    <span className="my-2">{product.cuantity}</span>
                  </ProductListItem>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <button
          className="bg-green-500 text-white px-4 py-2 rounded-md "
          onClick={controlGenerateList}
        >
          Generar Lista
        </button>
      </section>
    </main>
  );
};

export default BigBuyTab;
