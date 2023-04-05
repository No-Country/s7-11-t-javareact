import { useState } from "react";
import NewProductForm from "./NewProductForm";
import { FaEdit } from "react-icons/fa";
import { BiPlusCircle } from "react-icons/bi";
import { FaTrashAlt } from "react-icons/fa";
import { FaRegCheckCircle } from "react-icons/fa";
import { HiXMark } from "react-icons/hi2";

function ExpressTab() {
  const [dailyProducts, setDailyProducts] = useState([
    { id: 1, name: "Leche", checked: false, editing: false },
    { id: 2, name: "Pan", checked: false, editing: false },
    { id: 3, name: "Huevos", checked: false, editing: false },
    { id: 4, name: "Apples", checked: false, editing: false },
    { id: 5, name: "Avocado", checked: false, editing: false },
  ]);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [formState, setFormState] = useState(false);
  //const [editState, setEditState] = useState(false);
  console.log(dailyProducts[0].editing);
  console.log(dailyProducts[0].name);
  console.log(dailyProducts);
  console.log("formState:", formState);

  const controlProductCheck = (id) => {
    const updatedProducts = dailyProducts.map((product) =>
      product.id === id ? { ...product, checked: !product.checked } : product
    );
    setDailyProducts(updatedProducts);
  };

  const controlDoneClick = () => {
    const selected = dailyProducts.filter((product) => product.checked);
    setSelectedProducts(selected);
    setFormState(false);
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
    const updatedProducts = dailyProducts.filter(product => product.id !== productId);
    setDailyProducts(updatedProducts);
  }
  
  
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
      <ul className="list-container">
        {dailyProducts.map((product) => (
          <li
            key={product.id}
            className={`${
              product.checked === true ? "select-name" : "no-select-name"
            } flex justify-between items-center w-376 h-46 border-b-2 border-gray-300 p-5 text-lg`}
          >
            <div className="flex justify-center items-center">
              {product.checked == false ? (
                <BiPlusCircle
                  onClick={() => controlProductCheck(product.id)}
                  className={`${
                    product.checked === true ? "select-name" : "no-select-name"
                  } text-5xl text-my-blue `}
                />
              ) : (
                <HiXMark
                  onClick={() => controlProductCheck(product.id)}
                  className={`${
                    product.checked === true ? "select-name" : "no-select-name"
                  } text-5xl text-red-700 `}
                />
              )}

              {product.editing ? (
                <input
                  type="text"
                  className="ml-2"
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
                  product.editing ? "none" : "show"
                } text-3xl text-orange-600`}
              />
              <FaRegCheckCircle
                onClick={() => {
                  handleEditProduct(product.id, product.name, false);
                }}
                className={`${
                  product.editing === true ? "show" : "none"
                } text-3xl text-green-600`}
              />
              <FaTrashAlt
                className={`${
                  product.editing === true ? "show" : "none"
                } text-3xl text-red-600`}
                onClick={() => handleDeleteProduct(product.id)}
              />
            </div>
          </li>
        ))}
      </ul>{" "}
      <div
        onClick={() => {
          setFormState(true);
        }}
        className="flex w-full h-auto items-center justify-center"
      >
        <BiPlusCircle
          className={`${
            formState === true ? "desactivatedForm flex" : "activeForm"
          } text-5xl text-my-blue `}
        />
      </div>
      <div
 className={`${
  formState === true ? "activeForm flex" : "desactivatedForm hidden" 
} flex flex-col justify-center items-center gap-3 px-2`}
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
      <ShowExpressList selectedProducts={selectedProducts} />
    </section>
  );
}

function ShowExpressList({ selectedProducts }) {
  return (
    <div>
      {selectedProducts.map((product) => (
        <li key={product.id} className="flex ">
          {product.name}
        </li>
      ))}
    </div>
  );
}

export default ExpressTab;
