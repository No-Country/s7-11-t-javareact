import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MdAdd, MdDelete, MdRemove, MdPlaylistAddCheck } from "react-icons/md";
import { Transition } from "@headlessui/react";

import ProductListItem from "@/components/ProductListItem";
import AddProductModal from "./AddProductModal";

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

  const increaseProductCuantity = (product) => {
    setProductsList(
      productsList.map((p) =>
        p.id === product.id ? { ...p, cuantity: product.cuantity + 1 } : p
      )
    );
  };
  const lessProductCuantity = (product) => {
    if (product.cuantity <= 0) return;
    setProductsList(
      productsList.map((p) =>
        p.id === product.id ? { ...p, cuantity: product.cuantity - 1 } : p
      )
    );
  };

  const removeProductHandler = (product) => {
    setProductsList(productsList.filter((p) => p.id !== product.id));
  };

  const controlGenerateList = () => {
    console.log(productsList);
    navigate("/list/2");
  };
  return (
    <main className=" relative pb-40">
      <section className=" w-11/12 flex flex-col gap-6 p-[4%] bg-white shadow-2xl max-w-2xl mx-auto ">
        <h5 className="text-2xl ">Lista de compra en volumen</h5>
        <hr />
        <div className="flex flex-col gap-4  " role="list">
          {groupProductsByCategory(productsList).map(([category, products]) => (
            <div key={category} role="listitem">
              <h3 className="inline-block text-gray-700 border-b-4 border-primary mb-6 font-semibold ">
                {CATEGORIES_DATA.find((c) => c.id == category)?.name}
              </h3>
              <ul className="flex flex-col gap-2">
                {products.map((product, index) => (
                  <ProductListItem
                    key={product.id}
                    product={product}
                    endAdornment={
                      <button
                        className="bg-red-500 transition hover:bg-red-600
                        px-4 grid place-items-center text-xl text-white"
                        title="delete product"
                        onClick={() => removeProductHandler(product)}
                      >
                        <MdDelete />
                      </button>
                    }
                  >
                    <div className="flex items-baseline gap-2 ">
                      <button
                        className="bg-green-400 hover:bg-green-500
                       p-1 rounded-full text-xs text-white"
                        onClick={(e) => {
                          lessProductCuantity(product);
                          e.stopPropagation();
                        }}
                      >
                        <MdRemove />
                      </button>
                      <span className="my-2 text-md">{product.cuantity}</span>
                      <button
                        className="bg-green-400 hover:bg-green-500
                        p-1 rounded-full text-xs text-white "
                        onClick={(e) => {
                          e.stopPropagation();
                          increaseProductCuantity(product);
                        }}
                      >
                        <MdAdd />
                      </button>
                    </div>
                  </ProductListItem>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <footer className="bg-primary/40 backdrop-blur-md fixed bottom-0 w-full py-3">
        <AddProductModal addProductHandler={addProductHandler}>
          <AddProductForm addProductHandler={addProductHandler} />
        </AddProductModal>
        <div className="container flex justify-between items-center">
          <span>
            Cantidad:{" "}
            <b>
              {productsList.reduce(function (acc, obj) {
                return acc + obj.cuantity;
              }, 0)}
            </b>
          </span>
          <button
            className="bg-green-500  hover:bg-green-600 transition text-white px-4 py-1 rounded-md  "
            onClick={controlGenerateList}
          >
            Generar Lista
            <MdPlaylistAddCheck className="inline-block text-2xl ml-3" />
          </button>
        </div>
      </footer>
    </main>
  );
};

function AddProductForm({ addProductHandler }) {
  const [selectedCategory, setSelectedCategory] = useState("");

  return (
    <>
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
      <ul className="max-h-60 overflow-y-scroll">
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
    </>
  );
}

export default BigBuyTab;
