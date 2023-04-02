import { useState } from "react";
import { MdAdd, MdShoppingCart, MdCheckCircle } from "react-icons/md";

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
  { id: 1, name: "Carne de res", category: 1 },
  { id: 2, name: "Carne de cerdo", category: 1 },
  { id: 3, name: "Pollo", category: 1 },
  { id: 4, name: "Lechuga", category: 2 },
  { id: 5, name: "Tomate", category: 2 },
  { id: 6, name: "Cebolla", category: 2 },
  { id: 7, name: "Leche", category: 3 },
  { id: 8, name: "Queso", category: 3 },
  { id: 9, name: "Yogur", category: 3 },
  { id: 10, name: "Pan blanco", category: 4 },
  { id: 11, name: "Pan integral", category: 4 },
  { id: 12, name: "Pan de ajo", category: 4 },
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
    const list = generatedList(products);
    console.log(list);
    // aquí se puede enviar la lista a un servidor o mostrarla en una ventana emergente.
  };

  const generatedList = (products) => {
    const selectedProducts = products.filter((product) => product.checked);
    return selectedProducts.map((product) => ({ name: product.name }));
  };

  return (
    <main className="w-11/12 max-w-7xl mx-auto min-h-screen grid place-items-center">
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
        <div className="flex flex-col gap-4" role="list">
          {groupProductsByCategory(productsList).map(([category, products]) => (
            <div key={category} role="listitem">
              <h3 className="inline-block  border-b-4 mb-3 ">
                {CATEGORIES_DATA.find((c) => c.id == category)?.name}
              </h3>
              <ul className="flex flex-col gap-3">
                {products.map((product, index) => (
                  <ProductListItem
                    product={product}
                    key={product.id}
                    toggleProductDone={toggleProductDone}
                  />
                ))}
              </ul>
            </div>
          ))}
        </div>

        <button
          className="bg-green-500 text-white px-4 py-2 rounded-md "
          onClick={controlGenerateList}
        >
          Listo
        </button>
      </section>
    </main>
  );
};

function ProductListItem({ product, toggleProductDone }) {
  const { name, cuantity, done } = product;
  return (
    <li>
      <div
        role="checkbox"
        aria-checked={done}
        tabIndex="0"
        onKeyDown={(event) => {
          if (event.code == "Enter" || event.code == "Space")
            toggleProductDone(product);
        }}
        onClick={() => toggleProductDone(product)}
        className={`${
          done ? "bg-gray-50" : "bg-gray-100"
        } rounded-r-md py-4 px-8 text-md cursor-pointer flex flex-row gap-5 justify-between border-l-8 border-gray-300 items-center`}
      >
        <div className={`${done ? "line-through" : ""}`}>
          {done ? (
            <MdCheckCircle className="inline mr-4" />
          ) : (
            <MdShoppingCart className="inline mr-4" />
          )}
          {name}
        </div>
        <span>{cuantity}</span>
      </div>
    </li>
  );
}

export default BigBuyTab;
