import { useState } from "react";

import { MdEdit } from "react-icons/md";

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
  {
    id: 5.99,
    name: "Tomate",
    price: 5.99,
    category: 2,
    cuantity: 2,
    done: false,
  },
  {
    id: 4,
    name: "Lechuga",
    price: 7.99,
    category: 2,
    cuantity: 1,
    done: false,
  },
  {
    id: 6,
    name: "Cebolla",
    price: 5.99,
    category: 2,
    cuantity: 1,
    done: false,
  },
  {
    id: 8,
    name: "Queso",
    price: 5.99,
    category: 3,
    cuantity: 1,
    done: false,
  },
  {
    id: 7,
    name: "Leche",
    price: 8.99,
    category: 3,
    cuantity: 1,
    done: false,
  },
  {
    id: 11,
    name: "Pan integral",
    price: 9.99,
    category: 4,
    cuantity: 1,
    done: false,
  },
  {
    id: 10,
    name: "Pan blanco",
    price: 5.99,
    category: 4,
    cuantity: 1,
    done: false,
  },
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

function GeneratedList() {
  const [productsList, setProductsList] = useState(PRODUCTS);
  const toggleProductDone = (product) =>
    setProductsList(
      productsList.map((p) =>
        p.id === product.id ? { ...p, done: !p.done } : p
      )
    );

  return (
    <main className="w-11/12 max-w-7xl mx-auto p-5">
      <h1 className="text-2xl my-6">Lista Generada</h1>
      <div className="flex flex-col gap-4 " role="list">
        {groupProductsByCategory(productsList).map(([category, products]) => (
          <div key={category} role="listitem">
            <h3 className="inline-block  border-b-4 border-secondary-500 mb-6 font-semibold">
              {CATEGORIES_DATA.find((c) => c.id == category)?.name}
            </h3>
            <ul className="flex flex-col gap-2">
              {products.map((product, index) => (
                <ProductListItem
                  key={product.id}
                  product={product}
                  toggleProductDone={toggleProductDone}
                  checked={product.done}
                  endAdornment={
                    <button
                      className="bg-amber-300 px-5 grid place-items-center text-xl"
                      title="edit product"
                    >
                      <MdEdit />
                    </button>
                  }
                >
                  <div className="flex flex-col gap-1 text-sm ">
                    <span className=" underline">
                      {product.cuantity} x ${product.price}
                    </span>
                    <span className=" text-gray-700 ">
                      ${product.cuantity * product.price}
                    </span>
                  </div>
                </ProductListItem>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </main>
  );
}

export default GeneratedList;
