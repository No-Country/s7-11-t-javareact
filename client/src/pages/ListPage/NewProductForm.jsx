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
    <form className="flex" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Agregar nuevo product"
        className="border rounded-l-md px-2 py-1 flex-grow"
        value={newProductName}
        onChange={changeProductName}
      />
      <button
        type="submit"
        className="bg-green-500 text-white px-4 py-1 rounded-r-md"
      >
        Agregar
      </button>
    </form>
  );
}

export default NewProductForm;
