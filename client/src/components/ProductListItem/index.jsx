import { MdShoppingCart, MdCheckCircle } from "react-icons/md";

function ProductListItem({
  product,
  toggleProductDone,
  checked,
  children,
  endAdornment,
}) {
  const { name, cuantity, price } = product;
  return (
    <li className="flex flex-row">
      <div
        role="checkbox"
        aria-checked={checked}
        tabIndex="0"
        onKeyDown={(event) => {
          if (event.code == "Enter" || event.code == "Space")
            toggleProductDone(product);
        }}
        onClick={() => toggleProductDone(product)}
        className={`${checked ? "border-primary-50" : "border-primary-400"}
           border-l-8 cursor-pointer grid grid-cols-[auto,1fr,auto] items-stretch flex-grow`}
      >
        {checked ? (
          <MdCheckCircle className="mx-3 my-auto text-xl text-emerald-500" />
        ) : (
          <MdShoppingCart className="mx-3 my-auto text-xl" />
        )}
        <div
          className={`py-1 px-2 w-full rounded-l-lg flex flex-row flex-wrap justify-between
          ${checked ? "bg-gray-50" : "bg-primary-50"}`}
        >
          <h4
            className={`${
              checked ? "line-through decoration-red-600" : ""
            } my-auto`}
          >
            {name}
          </h4>
          {children}
        </div>
      </div>
      {endAdornment}
    </li>
  );
}

export default ProductListItem;
