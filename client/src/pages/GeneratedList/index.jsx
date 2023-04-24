import { useState, Fragment } from "react";
import { BlobProvider, PDFViewer } from "@react-pdf/renderer";
import { Dialog, Transition } from "@headlessui/react";

import { MdEdit, MdPictureAsPdf, MdCancel } from "react-icons/md";
import { ImWhatsapp } from "react-icons/im";

import ListDocument from "@/components/ListDocument";
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
  const [productsList, setProductsList] = useState(() =>
    JSON.parse(localStorage.getItem("compraLista"))
  );
  const toggleProductDone = (product) =>
    setProductsList(
      productsList.map((p) =>
        p.id === product.id ? { ...p, done: !p.done } : p
      )
    );
  const changeProductPrice = (product, price) =>
    setProductsList((prev) =>
      prev.map((p) => (p.id === product.id ? { ...p, price } : p))
    );
  const changeProductCuantity = (product, cuantity) =>
    setProductsList((prev) =>
      prev.map((p) => (p.id === product.id ? { ...p, cuantity } : p))
    );

  const getWAText = ({ listName = "", products }) => {
    const text = `*Lista de compras*  ${listName}
    ${products.map(
      (product) =>
        `%0a-${product.name} - ${product.cuantity} x $${product.price}`
    )}
    `;

    return text;
  };

  return (
    <main className="z-0 lg:bg-contain bg-[url('../../assets/images/mainBg.webp')] min-h-screen">
      <div className="lg:px-11 bg-white bg-opacity-80 h-full min-h-screen relative pb-24">
        <div className=" max-w-2xl mx-auto bg-white shadow-2xl p-[4%] w-11/12 my-10 mb-30">
          {/* <PDFViewer className="w-full h-screen">
        <ListDocument listName="Lista de Marzo" products={PRODUCTS} />
      </PDFViewer> */}
          <div className="flex flex-col gap-4 " role="list">
            <div className="flex justify-between items-center">
              <h1 className="text-2xl my-6 ">Lista Generada</h1>
              <span className="flex gap-2">
                <a
                  href={`https://wa.me/?text=${getWAText({
                    products: productsList,
                  })}`}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="bg-green-400 hover:bg-green-500 transition
           p-3 grid place-items-center text-xl rounded-full text-white"
                  title="WA Share"
                >
                  <ImWhatsapp />
                </a>
                <BlobProvider
                  document={
                    <ListDocument
                      listName="Lista de Marzo"
                      products={productsList}
                    />
                  }
                >
                  {({ url }) => (
                    <a
                      href={url}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="bg-red-600 hover:bg-red-700 transition
              p-3 grid place-items-center text-xl rounded-full text-white"
                      title="PDF"
                    >
                      <MdPictureAsPdf />
                    </a>
                  )}
                </BlobProvider>
              </span>
            </div>
            {groupProductsByCategory(productsList).map(
              ([category, products]) => (
                <div key={category} role="listitem">
                  <h3 className="inline-block  border-b-4 border-secondary-500 mb-6 font-semibold">
                    {CATEGORIES_DATA.find((c) => c.id == category)?.name}
                  </h3>
                  <ul className="flex flex-col gap-2">
                    {products.map((product, index) => (
                      <ProductItem
                        key={product.id}
                        product={product}
                        toggleProductDone={toggleProductDone}
                        changeProductPrice={changeProductPrice}
                        changeProductCuantity={changeProductCuantity}
                      />
                    ))}
                  </ul>
                </div>
              )
            )}
            <hr />
            <p className="text-right text-gray-600">
              Total de lista $
              {Math.round(
                productsList.reduce(function (acc, obj) {
                  return acc + obj.price * obj.cuantity;
                }, 0) * 100
              ) / 100}
            </p>
          </div>
        </div>
        <footer className="bg-secondary-500/30 backdrop-blur-md fixed bottom-0 left-0 w-full py-3">
          <div className="container flex justify-between items-center">
            <span>
              Productos obtenidos:
              <b>{productsList.filter((product) => product.done).length}</b>
            </span>
            <span>
              Total actual:
              <b>
                $
                {Math.round(
                  productsList.reduce(function (acc, obj) {
                    return obj.done ? acc + obj.price * obj.cuantity : acc;
                  }, 0) * 100
                ) / 100}
              </b>
            </span>
          </div>
        </footer>
      </div>
    </main>
  );
}

function ProductItem({
  product,
  toggleProductDone,
  changeProductPrice,
  changeProductCuantity,
}) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);
  };
  const handleCloseModal = () => {
    setIsOpen(false);
  };
  return (
    <>
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
                  <EditProductModal
                    handleCloseModal={handleCloseModal}
                    product={product}
                    changeProductPrice={changeProductPrice}
                    changeProductCuantity={changeProductCuantity}
                  />
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
      <ProductListItem
        key={product.id}
        product={product}
        toggleProductDone={toggleProductDone}
        checked={product.done}
        endAdornment={
          <button
            className="bg-amber-300 hover:bg-amber-400 transition
         px-4 grid place-items-center text-2xl text-white"
            title="edit product"
            onClick={handleOpenModal}
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
    </>
  );
}

function EditProductModal({
  handleCloseModal,
  product,
  changeProductPrice,
  changeProductCuantity,
}) {
  return (
    <div className="flex flex-col gap-1">
      <div className="flex justify-between">
        <h5 className="text-xl">Editando {product.name}</h5>
        <button
          className=" 
         grid place-items-center text-2xl text-white"
          title="close"
          onClick={handleCloseModal}
        >
          <MdCancel className="text-red-500 hover:text-red-600 text-4xl" />
        </button>
      </div>
      <label className="text-left text-gray-600">Precio:</label>
      <input
        autofocus="autofocus"
        defaultValue={product.price}
        type="number"
        onChange={(e) => changeProductPrice(product, e.target.value)}
        className="border-secondary-400 border-2 focus:outline-secondary-600"
      />
      <label className="text-left text-gray-600">Cantidad:</label>
      <input
        defaultValue={product.cuantity}
        type="number"
        onChange={(e) => changeProductCuantity(product, e.target.value)}
        className="border-secondary-400 border-2 focus:outline-secondary-600"
      />
    </div>
  );
}

export default GeneratedList;
