import { useState, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { MdAdd } from "react-icons/md";

function AddProduct({ addProductHandler }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);
  };
  return (
    <>
      {/* <button
        className="bg-secondary-500 text-white px-4 py-2 rounded-md self-end
 hover:bg-secondary-700 transition"
        onClick={handleOpenModal}
      >
        Agregar Producto
        <MdAdd className="inline-block text-2xl ml-3" />
      </button> */}
      <button
        title="Add Product"
        className="bg-primary-500 text-white p-3 rounded-full self-end
        hover:bg-primary-600 transition
        absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        onClick={handleOpenModal}
      >
        <MdAdd className="inline-block text-3xl " />
      </button>

      <Transition show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          onClose={() => setIsOpen(false)}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel
                  className="transform overflow-hidden bg-white transition-all
                 shadow-2xl flex flex-col gap-6 py-9 px-[3%] w-full max-w-lg"
                >
                  <AddProductForm
                    addProductHandler={addProductHandler}
                    closeModal={() => setIsOpen(false)}
                  />
                  <button
                    onClick={() => setIsOpen(false)}
                    className="bg-red-500 transition hover:bg-red-600 py-2
              grid place-items-center text-base text-white"
                  >
                    Cancelar
                  </button>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}

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
  { id: 5, name: "Tomate", price: 5.99, category: 2 },
  { id: 6, name: "Cebolla", price: 5.99, category: 2 },
  { id: 7, name: "Leche", price: 8.99, category: 3 },
  { id: 8, name: "Queso", price: 5.99, category: 3 },
  { id: 9, name: "Yogur", price: 2.99, category: 3 },
  { id: 10, name: "Pan blanco", price: 5.99, category: 4 },
  { id: 11, name: "Pan integral", price: 9.99, category: 4 },
  { id: 12, name: "Pan de ajo", price: 1.99, category: 4 },
];

function AddProductForm({ addProductHandler, closeModal }) {
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
      <ul className="max-h-60 overflow-y-auto">
        {PRODUCTS.filter(
          (product) => product.category == selectedCategory
        )?.map((product) => (
          <li key={product.id} className="flex my-2">
            <button
              className=" bg-gray-200 transition w-full rounded-md flex flex-row justify-between items-center px-3 py-2 border-2 hover:border-gray-500 border-transparent"
              onClick={() => {
                addProductHandler(product);
                closeModal();
              }}
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

export default AddProduct;
