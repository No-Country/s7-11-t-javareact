import { useState, useEffect } from "react";
import NewProductForm from "./NewProductForm";
import { FaEdit, FaRegCheckCircle, FaTrashAlt } from "react-icons/fa";
import { BiPlusCircle } from "react-icons/bi";
import { HiXMark } from "react-icons/hi2";

function ExpressTab() {
  const [dailyProducts, setDailyProducts] = useState(() => {
    const savedProducts = localStorage.getItem("dailyProducts");
    if (savedProducts) {
      return JSON.parse(savedProducts);
    } else {
      return [
        { id: 1, name: "Leche", checked: false, editing: false },
        { id: 2, name: "Pan", checked: false, editing: false },
        { id: 3, name: "Huevos", checked: false, editing: false },
        { id: 4, name: "Apples", checked: false, editing: false },
      ];
    }
  });
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [formState, setFormState] = useState(false);
  console.log(dailyProducts);
  console.log("formState:", formState);

  useEffect(() => {
    localStorage.setItem("dailyProducts", JSON.stringify(dailyProducts));
  }, [dailyProducts]);

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

  const handleDeleteProduct = (productId) => {
    const updatedProducts = dailyProducts.filter(
      (product) => product.id !== productId
    );
    setDailyProducts(updatedProducts);
  };

  const handleEditProduct = (id, editedName, state) => {
    const updatedProducts = dailyProducts.map((product) =>
      product.id === id
        ? { ...product, name: editedName, editing: state }
        : product
    );
    setDailyProducts(updatedProducts);
  };

  return (
    <section className="flex flex-col gap-10 ">
      <ul className="h-55vh overflow-y-auto">
        {dailyProducts.map((product) => (
          <li
            key={product.id}
            className={`${
              product.checked === true ? "bg-slate-500" : "bg-transparent"
            } flex justify-between items-center w-376 h-46 border-b-2 border-gray-300 p-5 text-lg active:bg-[#ACC0DF] cursor-pointer`}
          >
            <div className="flex justify-center items-center">
              {product.checked == false ? (
                <BiPlusCircle
                  onClick={() => controlProductCheck(product.id)}
                  className={`${
                    product.checked === true ? "bg-slate-500" : "bg-transparent"
                  } text-5xl text-primary `}
                />
              ) : (
                <HiXMark
                  onClick={() => controlProductCheck(product.id)}
                  className={`${
                    product.checked === true ? "bg-slate-500" : "bg-transparent"
                  } text-5xl text-red-700 `}
                />
              )}

              {product.editing ? (
                <input
                  type="text"
                  className="ml-2 w-full bg-transparent"
                  value={product.name}
                  onChange={(e) =>
                    handleEditProduct(
                      product.id,
                      e.target.value,
                      product.editing
                    )
                  }
                />
              ) : (
                <div className="flex gap-5 items-center justify-center">
                  <label htmlFor={product.id} className="ml-2">
                    {product.name}
                  </label>
                </div>
              )}
            </div>
            <div className="flex gap-5">
              <FaEdit
                onClick={() => {
                  handleEditProduct(product.id, product.name, true);
                }}
                className={`${
                  product.editing ? "hidden" : "block"
                } text-3xl text-orange-600 `}
              />
              <FaRegCheckCircle
                onClick={() => {
                  handleEditProduct(product.id, product.name, false);
                }}
                className={`${
                  product.editing === true ? "block" : "hidden"
                } text-3xl text-green-600`}
              />
              <FaTrashAlt
                className={`${
                  product.editing === true ? "block" : "hidden"
                } text-3xl text-white bg-red-600 cursor-pointer p-2 rounded-lg`}
                onClick={() => handleDeleteProduct(product.id)}
              />
            </div>
          </li>
        ))}
      </ul>{" "}
      <div className='relative'>
        <div
          onClick={() => {
            setFormState(true);
          }}
          className="flex w-full h-auto items-center justify-center"
        >
          <BiPlusCircle
            className={`${
              formState === true ? "hidden" : "block"
            } text-5xl text-primary `}
          />
        </div>
        <div
          className={`${
            formState === true ? "block" : "hidden"
          } flex flex-col justify-center items-center gap-3 px-2 absolute w-full`}
        >
          <NewProductForm addProduct={addProductClick} />
          <div className="">
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-md"
              onClick={controlDoneClick}
            >
              Listo
            </button>
          </div>
        </div>
      </div>
      <ShowExpressList selectedProducts={selectedProducts} />
    </section>
  );
}

function ShowExpressList({ selectedProducts }) {
  return (
    <div>
      {selectedProducts.map((product) => (
        <li key={product.id} className="flex">
          {product.name}
        </li>
      ))}
    </div>
  );
}

export default ExpressTab;
