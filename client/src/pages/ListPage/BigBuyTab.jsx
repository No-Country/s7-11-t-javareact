import { useState } from "react";

const options = [
  { value: "", label: "Seleccionar sección" },
  { value: "Carnicería", label: "Carnicería" },
  { value: "Verdulería", label: "Verdulería" },
  { value: "Lácteos", label: "Lácteos" },
  { value: "Panadería", label: "Panadería" },
];

const BigBuyTab = () => {
  const [selectedSection, setSelectedSection] = useState("");
  const [products, setProducts] = useState([]);

  const sections = [
    { value: "Carnicería", label: "Carnicería" },
    { value: "Verdulería", label: "Verdulería" },
    { value: "Lácteos", label: "Lácteos" },
    { value: "Panadería", label: "Panadería" },
  ];

  const controlSectionChange = (e) => {
    setSelectedSection(e.target.value);

    switch (e.target.value) {
      case "Carnicería":
        setProducts([
          { id: 1, name: "Carne de res", checked: false },
          { id: 2, name: "Carne de cerdo", checked: false },
          { id: 3, name: "Pollo", checked: false },
        ]);
        break;
      case "Verdulería":
        setProducts([
          { id: 1, name: "Lechuga", checked: false },
          { id: 2, name: "Tomate", checked: false },
          { id: 3, name: "Cebolla", checked: false },
        ]);
        break;
      case "Lácteos":
        setProducts([
          { id: 1, name: "Leche", checked: false },
          { id: 2, name: "Queso", checked: false },
          { id: 3, name: "Yogur", checked: false },
        ]);
        break;
      case "Panadería":
        setProducts([
          { id: 1, name: "Pan blanco", checked: false },
          { id: 2, name: "Pan integral", checked: false },
          { id: 3, name: "Pan de ajo", checked: false },
        ]);
        break;
      default:
        setProducts([]);
    }
  };

  const controlProductCheck = (productId) => {
    setProducts((prevState) =>
      prevState.map((product) =>
        product.id === productId
          ? { ...product, checked: !product.checked }
          : product
      )
    );
  };

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
    <div className="bg-gray-200 rounded-md p-4">
      <select className="w-full border border-gray-300 rounded-md py-2 px-4" value={selectedSection} onChange={controlSectionChange}>
        <option value="">Seleccionar sección</option>
        {sections.map((section) => (
          <option key={section.value} value={section.value}>
            {section.label}
          </option>
        ))}
      </select>

      {products.length > 0 && (
        <div>
          <ul className="list-disc list-inside h-40 overflow-y-scroll mt-4">
            {products.map((product) => (
              <li key={product.id} className="flex products-center my-2">
                <input type="checkbox" id={product.id} checked={product.checked} onChange={() => controlProductCheck(product.id)} />
                <label htmlFor={product.id} className="ml-2">
                  {product.name}
                </label>
              </li>
            ))}
          </ul>
          <div className="flex justify-between mt-4">
            {/* añadir input para nuevo producto */}
            <button className="bg-green-500 text-white px-4 py-2 rounded-md" onClick={controlGenerateList}>
              Listo
            </button>
          </div>
        </div>
      )}

      {generatedList(products).length > 0 && (
        <div className="mt-4">
          <h2 className="font-bold text-xl mb-2">{selectedSection}</h2>
          <ul className="list-disc list-inside">
            {generatedList(products).map((product, index) => (
              <li key={index}>{product.name}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default BigBuyTab;