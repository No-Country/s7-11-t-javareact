import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  MdAdd,
  MdDelete,
  MdRemove,
  MdAddCircle,
  MdPlaylistAddCheck,
  MdShoppingCart,
} from "react-icons/md";
import { FaEdit, FaRegCheckCircle, FaTrashAlt } from "react-icons/fa";
import { BiPlusCircle } from "react-icons/bi";
import { HiXMark } from "react-icons/hi2";

import { getCategories } from "@/api/categories";

import ProductListItem from "@/components/ProductListItem";
import NewProductForm from "./NewProductForm";

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
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const response = await getCategories();
        console.log(response);
        console.log("categorias->", response.data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  const editProductName = (id, name) => {
    setProductsList(
      productsList.map((product) =>
        product.id === id ? { ...product, name } : product
      )
    );
  };

  const addProductHandler = (product) => {
    console.log(product);
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

  const removeProductHandler = (productId) => {
    setProductsList(productsList.filter((p) => p.id !== productId));
  };

  const controlGenerateList = () => {
    // const list = generatedList(products);
    console.log(productsList);
    localStorage.setItem("compraLista", JSON.stringify(productsList));
    // aquí se puede enviar la lista a un servidor o mostrarla en una ventana emergente.
    navigate("/list/2");
  };
  return (
    <main className="">
      <section className="flex flex-col gap-8 w-full h-screen ">
        <div className="w-full lg:px-[10%]">
          <div className="rounded-md p-4">
            <div className="flex gap-2">
              <select
                className="w-full border border-secondary-300 focus:outline-secondary-600  rounded-md py-2 px-4"
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
              <button
                className="bg-secondary-500 transition hover:bg-secondary-600
                       rounded-full px-2 aspect-square grid place-items-center text-3xl text-white"
                title="add category"
              >
                <MdAdd />
              </button>
            </div>
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
          <div className="flex justify-center">
            {showForm ? (
              <NewProductForm
                addProduct={(e) => {
                  console.log(e);
                  setShowForm(false);
                }}
              />
            ) : (
              <button
                className="bg-secondary-500 transition hover:bg-secondary-600 
          rounded-full  grid place-items-center text-3xl text-white"
                title="add product"
                onClick={() => setShowForm(true)}
              >
                <MdAddCircle className="h-11 w-11" />
              </button>
            )}
          </div>

          <div className="flex flex-col gap-4 " role="list">
            {groupProductsByCategory(productsList).map(
              ([category, products]) => (
                <div key={category} role="listitem" className="px-4">
                  <h3 className="inline-block  border-b-4 border-secondary-500 mb-6 font-semibold">
                    {CATEGORIES_DATA.find((c) => c.id == category)?.name}
                  </h3>
                  <ul className="flex flex-col gap-2">
                    {products.map((product, index) => (
                      <ProductItem
                        key={product.id}
                        product={product}
                        editProductName={editProductName}
                        removeProductHandler={removeProductHandler}
                      />
                      /*   <ProductListItem
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
                          <span className="my-2 text-md">
                            {product.cuantity}
                          </span>
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
                      </ProductListItem> */
                    ))}
                  </ul>
                </div>
              )
            )}
          </div>
          <div className="w-full py-4 lg-py-[7%] lg:px-[30%]">
            <button
              className="bg-green-500 hover:bg-green-600 transition w-full text-white px-4 py-2 rounded-md "
              onClick={controlGenerateList}
            >
              Generar Lista
              <MdPlaylistAddCheck className="inline-block text-2xl ml-3" />
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

function ProductItem({ product, editProductName, removeProductHandler }) {
  const [checked, setChecked] = useState(false);
  const [showEditForm, setShowEditForm] = useState(false);
  const [productNameInput, setProductNameInput] = useState(product.name);

  const submitProductName = (e) => {
    e.preventDefault();
    editProductName(product.id, productNameInput);
    setShowEditForm(false);
  };

  return (
    <li
      key={product.id}
      className={`${
        checked === true ? "bg-slate-500" : "bg-transparent"
      } flex justify-between items-center w-376 h-46 border-b-2 border-gray-300 p-5 text-lg`}
    >
      <div className="flex justify-center items-center ">
        {checked == false ? (
          <BiPlusCircle
            className={`${
              checked === true ? "bg-slate-500" : "bg-transparent"
            } text-2xl text-primary cursor-pointer`}
          />
        ) : (
          <HiXMark
            className={`${
              checked === true ? "bg-slate-500" : "bg-transparent"
            } text-2xl text-red-700 cursor-pointer`}
          />
        )}

        {showEditForm ? (
          <form onSubmit={submitProductName}>
            <input
              autoFocus="autofocus"
              type="text"
              className="ml-2 w-full animate-blink bg-transparent rounded-md focus:outline-none focus:ring focus:ring-transparent"
              value={productNameInput}
              onChange={(e) => setProductNameInput(e.target.value)}
            />
          </form>
        ) : (
          <div
            onClick={() => controlProductCheck(product.id, true)}
            className="w-64 flex gap-5 items-center justify-start "
          >
            <label htmlFor={product.id} className=" ml-2">
              {product.name}
            </label>
          </div>
        )}
      </div>
      <div className="flex gap-1">
        <FaEdit
          onClick={() => {
            setShowEditForm(true);
          }}
          className={`${
            showEditForm ? "hidden" : "block"
          } text-2xl text-orange-600 cursor-pointer`}
        />
        <FaRegCheckCircle
          onClick={() => {
            setShowEditForm(false);
          }}
          className={`${
            showEditForm === true ? "block" : "hidden"
          } text-2xl text-green-600 cursor-pointer`}
        />
        <FaTrashAlt
          className={`${
            showEditForm === true ? "block" : "hidden"
          } text-2xl text-white bg-red-600 cursor-pointer p-2 rounded-lg `}
          onClick={() => removeProductHandler(product.id)}
        />
      </div>
    </li>
  );
}

export default BigBuyTab;
