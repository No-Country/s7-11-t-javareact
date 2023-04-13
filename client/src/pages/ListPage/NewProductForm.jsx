import { useState } from "react";

function NewProductForm({ addProduct }) {
  const [newProductName, setNewProductName] = useState("");

  const changeProductName = (e) => {
    setNewProductName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addProduct(newProductName);
    setNewProductName("");
  };
  return (
    <form className="flex flex-col items-center gap-3" onSubmit={handleSubmit}>
      <div className="px-5 lg:px-0">
        <input
          type="text"
          placeholder="Escriba el nombre del producto"
          className="text-base border rounded-md px-2 py-1 flex-grow"
          value={newProductName}
          onChange={changeProductName}
        />
      </div>
      <div className="w-full px-5">
        <button
          type="submit"
          className="bg-green-500 w-full text-white px-4 py-1 rounded-md"
        >
          Agregar
        </button>
      </div>
    </form>
  );
}

export default NewProductForm;
