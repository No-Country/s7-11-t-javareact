const ListCard = ({ title, items }) => {
  return (
    <div className="flex flex-col max-w-[22rem] gap-2 h-auto">
      <div
        className={`flex flex-col justify-center p-[2%] h-full bg-gray-50 drop-shadow-md rounded-2xl text-center text-neutral-900`}
      >
        <div className="flex-1 self-center w-auto h-auto px-1 mt-[4%] max-w-sm">
          <b>
            <h2 className="text-title font-title max-[270px]:text-base ">
              {title}
            </h2>
          </b>
          <div className="w-full p-1">
            <div className="flex justify-between p-1">
              <h3 className="font-bold">Producto</h3>
              <h3 className="font-bold">Cantidad</h3>
            </div>
            {items === null
              ? "No existen datos en la lista"
              : items.map((item) => (
                  <ul className="w-full border border-b-2 border-gray-400 rounded-md overflow-x-hidden overflow-y-auto flex m-1 p-1 gap-1">
                    <div className="flex">
                      <div className="w-72 flex gap-1 justify-start items-center border-r-2 border-black">
                        <div>{item.name}</div>
                      </div>
                      <div className="w-full flex justify-end items-center gap-2 bg-[#ecf6fd]">
                        <div>{item.quantity}x</div>
                      </div>
                    </div>
                  </ul>
                ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListCard;
