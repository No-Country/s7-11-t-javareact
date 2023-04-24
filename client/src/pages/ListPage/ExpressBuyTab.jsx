import { useState, useEffect } from "react";
import NewProductForm from "./NewProductForm";
import { FaEdit, FaRegCheckCircle, FaTrashAlt } from "react-icons/fa";
import { BiPlusCircle } from "react-icons/bi";
import { HiXMark } from "react-icons/hi2";
import { useRef } from "react";
import { MdShoppingCart } from "react-icons/md";
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
  const inputRef = useRef(null);
  const [stateSelectItem, setStateSelectItem] = useState(() => {
    const storedState = localStorage.getItem("selectItemState");
    return storedState ? JSON.parse(storedState) : [];
  });
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [formState, setFormState] = useState(false);
  const [nameList, setNameList] = useState([
    {
      id: 1,
      name: "Lista de hoy",
      data: [
        { id: 1, name: "Leche", checked: false, editing: false, quantity: 4 },
        { id: 2, name: "Pan", checked: false, editing: false, quantity: 3 },
        { id: 3, name: "Huevos", checked: false, editing: false, quantity: 1 },
        { id: 4, name: "Apples", checked: false, editing: false, quantity: 2 },
      ],
    },
    {
      id: 2,
      name: "compras",
      data: [
        { id: 1, name: "Leche", checked: false, editing: false, quantity: 2 },
        { id: 2, name: "Pan", checked: false, editing: false, quantity: 2 },
        { id: 3, name: "Huevos", checked: false, editing: false, quantity: 2 },
        { id: 4, name: "Apples", checked: false, editing: false, quantity: 2 },
      ],
    },
  ]);
  const [newListName, setNewListName] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  console.log(nameList);
  useEffect(() => {
    localStorage.setItem("dailyProducts", JSON.stringify(dailyProducts));
  }, [dailyProducts]);

  const controlProductCheck = (id, state) => {
    const updatedProducts = dailyProducts.map((product) =>
      product.id === id ? { ...product, checked: state } : product
    );
    setDailyProducts(updatedProducts);
  };

  const addSelectItem = (id) => {
    const selectItem = dailyProducts.find((product) => product.id === id);
    if (selectItem) {
      setStateSelectItem((prevState) => {
        const existingItemIndex = prevState.findIndex((item) => item.id === id);
        if (existingItemIndex !== -1) {
          const updatedItem = {
            ...prevState[existingItemIndex],
            quantity:
              prevState[existingItemIndex].quantity +
              (selectItem.quantity || 1),
          };
          const newState = [
            ...prevState.slice(0, existingItemIndex),
            updatedItem,
            ...prevState.slice(existingItemIndex + 1),
          ];
          localStorage.setItem("selectItemState", JSON.stringify(newState));
          return newState;
        } else {
          const newState = [...prevState, { ...selectItem, quantity: 1 }];
          localStorage.setItem("selectItemState", JSON.stringify(newState));
          return newState;
        }
      });
    }
  };

  const removeSelectItem = (id) => {
    setStateSelectItem((prevState) => {
      return prevState.filter((item) => item.id !== id);
    });
  };

  const controlDoneClick = () => {
    const selected = dailyProducts.filter((product) => product.checked);
    setSelectedProducts(selected);
    setFormState(false);
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
        : { ...product, editing: false }
    );
    setDailyProducts(updatedProducts);
  };

  const updateQuantity = (id, quantity, state) => {
    const updatedQuantitys = stateSelectItem.map((product) =>
      product.id === id
        ? { ...product, quantity, editing: state }
        : { ...product, editing: false }
    );
    setStateSelectItem(updatedQuantitys);
    localStorage.setItem("selectItemState", JSON.stringify(updatedQuantitys));
  };

  const handleListNameChange = (event) => {
    setNewListName(event);
  };

  const addNewListHome = () => {
    if (newListName.trim() !== "") {
      const newId = nameList.length + 1;
      const newList = {
        id: newId,
        name: newListName,
        data: stateSelectItem,
      };
      setNameList([...nameList, newList]);
      localStorage.setItem("nameList", JSON.stringify([...nameList, newList]));
      setNewListName("");
      setStateSelectItem([]);
      localStorage.removeItem("selectItemState");
      setErrorMessage("");
    } else {
      setErrorMessage("Ingrese un nombre para su lista");
    }
  };

  return (
    <section className="flex flex-col gap-5 justify-between lg:px-6">
      <div className="w-full h-10 flex flex-col items-center justify-center shadow-md rounded-md p-1">
        <input
          autoFocus="autofocus"
          type="text"
          placeholder="Inserte nombre de la lista"
          className="border rounded-md p-1"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              inputRef.current.blur();
              handleListNameChange(e.target.value);
            }
          }}
          onChange={(e) => handleListNameChange(e.target.value)}
          value={newListName}
          ref={inputRef}
        />
        {errorMessage && <p className="text-red-500">{errorMessage}</p>}
      </div>
      <ul className="h-72 overflow-y-auto">
        {dailyProducts.map((product) => (
          <li
            key={product.id}
            className={`cursor-pointer flex justify-between items-center w-376 h-46 border-b-2 border-gray-300 p-5 text-lg`}
          >
            <div className="flex justify-start items-center ">
              <BiPlusCircle
                onClick={() => addSelectItem(product.id)}
                className={`text-2xl lg:text-3xl text-primary cursor-pointer`}
              />
              {product.editing ? (
                <input
                  autoFocus="autofocus"
                  type="text"
                  className="ml-2 lg:text-2xl animate-blink bg-transparent rounded-md focus:outline-none focus:ring focus:ring-transparent"
                  value={product.name}
                  onChange={(e) =>
                    handleEditProduct(
                      product.id,
                      e.target.value,
                      product.editing
                    )
                  }
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault();
                      handleEditProduct(product.id, e.target.value, false);
                      inputRef.current.blur();
                    }
                  }}
                  ref={inputRef}
                />
              ) : (
                <div className="w-64 flex gap-5 items-center justify-start ">
                  <label htmlFor={product.id} className=" ml-2 lg:text-2xl">
                    {product.name}
                  </label>
                </div>
              )}
            </div>
            <div className="flex gap-1">
              <FaEdit
                onClick={() => {
                  handleEditProduct(product.id, product.name, true);
                }}
                className={`${
                  product.editing ? "hidden" : "block"
                } text-2xl lg:text-3xl text-orange-600 cursor-pointer`}
              />
              <FaRegCheckCircle
                onClick={() => {
                  handleEditProduct(product.id, product.name, false);
                }}
                className={`${
                  product.editing === true ? "block" : "hidden"
                } text-2xl lg:text-3xl text-green-600 cursor-pointer`}
              />
              <FaTrashAlt
                className={`${
                  product.editing === true ? "block" : "hidden"
                } text-2xl lg:text-3xl text-white bg-red-600 cursor-pointer p-2 rounded-lg `}
                onClick={() => handleDeleteProduct(product.id)}
              />
            </div>
          </li>
        ))}
      </ul>
      <div className="relative">
        <div
          onClick={() => {
            setFormState(true);
          }}
          className="flex w-full h-auto items-center justify-center"
        >
          <BiPlusCircle
            className={`${
              formState === true ? "hidden" : "block"
            } text-5xl lg:text-3xl text-primary h-20 cursor-pointer`}
          />
        </div>
        <div
          className={`${
            formState === true ? "block" : "hidden"
          } flex flex-col justify-center items-center gap-3 px-2 w-full h-20`}
        >
          <div className="flex justify-center items-center content-center">
            <NewProductForm addProduct={addProductClick} />
            <div className="px-6 ">
              <button
                className="mb-11 px-2 py-1 text-sm text-white bg-red-500 rounded-lg hover:bg-red-400"
                onClick={() => {
                  setFormState(false);
                }}
              >
                X
              </button>
            </div>
          </div>
        </div>
      </div>
      <ul className="w-full h-40 border border-b-2 border-gray-400 rounded-md overflow-x-hidden overflow-y-auto grid grid-cols-[3,1fr,auto] items-stretch gap-2 ">
        {stateSelectItem.map((product) => (
          <li key={product.id} className="w-full flex justify-end px-2 py-1">
            <div className="w-72 flex gap-1 justify-start items-center border-r-2 border-black">
              <div className="bg-primary-300 p-2">
                <MdShoppingCart />
              </div>
              <div>{product.name}</div>
            </div>
            <div className="w-full flex justify-end items-center gap-2 bg-[#ecf6fd]">
              <div className="flex justify-end items-center">
                {product.editing ? (
                  <input
                    autoFocus="autofocus"
                    type="text"
                    className="ml-2 text-end animate-blink bg-transparent rounded-md focus:outline-none focus:ring focus:ring-transparent"
                    value={product.quantity}
                    onChange={(e) =>
                      updateQuantity(
                        product.id,
                        e.target.value,
                        product.editing
                      )
                    }
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        e.preventDefault();
                        updateQuantity(product.id, e.target.value, false);
                        inputRef.current.blur();
                      }
                    }}
                    ref={inputRef}
                  />
                ) : (
                  <div className="flex gap-1 items-center justify-end ">
                    <label htmlFor={product.id} className=" ml-2 ">
                      {product.quantity}
                    </label>
                    <div>x</div>
                  </div>
                )}
              </div>
              <FaRegCheckCircle
                onClick={() => {
                  updateQuantity(product.id, product.quantity, false);
                }}
                className={`${
                  product.editing === true ? "block" : "hidden"
                } text-2xl lg:text-3xl text-green-600 cursor-pointer`}
              />
              <FaEdit
                onClick={() => {
                  updateQuantity(product.id, product.quantity, true);
                }}
                className={`${
                  product.editing ? "hidden" : "block"
                } text-2xl lg:text-3xl text-orange-600 cursor-pointer`}
              />
              <HiXMark
                onClick={() => removeSelectItem(product.id)}
                className="text-2xl lg:text-3xl text-white bg-red-600 cursor-pointer border border-red hover:bg-white hover:text-red-500"
              />
            </div>
          </li>
        ))}
      </ul>
      <div className="w-full h-7 flex justify-center items-center p-1 bg-orange-400 text-white text-lg">
        <button className="w-full" onClick={() => addNewListHome()}>
          Generar lista
        </button>
      </div>
    </section>
  );
}

export default ExpressTab;
