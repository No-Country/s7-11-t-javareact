import { useState } from "react";
import { BlobProvider, PDFViewer } from "@react-pdf/renderer";

import { MdEdit, MdPictureAsPdf } from "react-icons/md";
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
  const [productsList, setProductsList] = useState(PRODUCTS);
  const toggleProductDone = (product) =>
    setProductsList(
      productsList.map((p) =>
        p.id === product.id ? { ...p, done: !p.done } : p
      )
    );

  const getWAText = ({ listName, products }) => {
    const text = `*Lista de compras* - ${listName}
    ${products.map((product) => `%0a-${product.name} - ${product.price}`)}
    `;

    return text;
  };

  return (
    <main className="w-11/12 max-w-7xl mx-auto p-5">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl my-6 ">Lista Generada</h1>
        <span className="flex gap-2">
          <a
            href={`https://wa.me/?text=${getWAText({
              listName: "Lista de marzo",
              products: PRODUCTS,
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
              <ListDocument listName="Lista de Marzo" products={PRODUCTS} />
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
      {/* <PDFViewer className="w-full h-screen">
        <ListDocument listName="Lista de Marzo" products={PRODUCTS} />
      </PDFViewer> */}
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
