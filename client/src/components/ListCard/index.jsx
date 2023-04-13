const ListCard = ({ title, subtitle }) => {
  return (
    <div className="flex flex-col max-w-[22rem] max-270px]:h-[9.5rem] min-270px]:h-[9rem]">
      <div
        className={`flex flex-col justify-center p-[2%] h-full bg-gray-50 drop-shadow-md rounded-2xl text-center text-neutral-900`}
      >
        <div className="flex-1 self-center w-auto h-auto px-1 mt-[4%] max-w-sm">
          <b>
            <h2 className="text-title font-title max-[270px]:text-base ">
              {title}
            </h2>
          </b>
          <p className="text-sans font-subtitle font-medium pt-[3%]">
            {subtitle}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ListCard;
