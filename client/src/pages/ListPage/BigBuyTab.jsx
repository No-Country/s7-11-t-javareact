import { useState } from "react";
import { MdAdd, MdShoppingCart, MdCheckCircle, MdEdit } from "react-icons/md";

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
    <main className="">
      <section className="flex flex-col gap-8 w-full">
        <div className="rounded-md p-4 ">
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
  const { name, cuantity, price, done } = product;
  return (
    <li className="flex flex-row">
      <div
        role="checkbox"
        aria-checked={done}
        tabIndex="0"
        onKeyDown={(event) => {
          if (event.code == "Enter" || event.code == "Space")
            toggleProductDone(product);
        }}
        onClick={() => toggleProductDone(product)}
        className={`${done ? "border-primary-50" : "border-primary-400"}
         border-l-8 cursor-pointer grid grid-cols-[auto,1fr,auto] items-stretch flex-grow`}
      >
        {done ? (
          <MdCheckCircle className="mx-3 my-auto text-xl text-emerald-500" />
        ) : (
          <MdShoppingCart className="mx-3 my-auto text-xl" />
        )}
        <div
          className={`py-1 px-2 w-full rounded-l-lg flex flex-row flex-wrap justify-between
        ${done ? "bg-gray-50" : "bg-primary-50"}`}
        >
          <h4
            className={`${
              done ? "line-through decoration-red-600" : ""
            } my-auto`}
          >
            {name}
          </h4>
          <div className="flex flex-col gap-1 text-sm ">
            <span className=" underline">
              {cuantity} x ${price}
            </span>
            <span className=" text-gray-700 ">${cuantity * price}</span>
          </div>
        </div>
      </div>
      <button
        className="bg-amber-300 px-5 grid place-items-center text-xl"
        title="edit product"
      >
        <MdEdit />
      </button>
    </li>
  );
}

export default BigBuyTab;
