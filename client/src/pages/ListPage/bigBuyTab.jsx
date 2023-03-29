function BigBuyTab() {
  return (
    <section className="bg-gray-200 rounded-md p-4" role="tabpanel">
      <select className="w-full border border-gray-300 rounded-md py-2 px-4">
        <option value="">Selecciona una opción</option>
        <option value="meat">Carnicería</option>
        <option value="produce">Verdulería</option>
        <option value="dairy">Lácteos</option>
        <option value="bakery">Panadería</option>
      </select>
    </section>
  );
}
export default BigBuyTab;
