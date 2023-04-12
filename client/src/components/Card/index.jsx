
const Card = ({image, service, paragraph }) => {

  return (
    <div className="flex flex-col max-w-[22rem] lg:w-full lg:h-full">
      <div
        className={`flex flex-col justify-center p-[2%] max-270px]:h-[9.5rem] lg:h-full lg:w-full lg:bg-transparent bg-gray-50 drop-shadow-md rounded-2xl text-center text-neutral-900 h-[15rem]`}
      >
        <div className="pl-[3%] justify-self-center self-center  h-[7rem] max-[270px]:h-[6rem] flex-initial max-w-sm rounded-full flex-shrink-0">
          <img
            src={image}
            alt="service"
            className="object-cover w-full h-full rounded-full"
          />
        </div>
        <div className="flex-1 self-center w-auto h-auto px-1 mt-[4%] max-w-sm">
          <b>
            <h2 className="text-title font-title max-[270px]:text-base ">
              {service}
            </h2>
          </b>
          <p className="text-sans font-subtitle font-medium pt-[3%]">
            {paragraph}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Card