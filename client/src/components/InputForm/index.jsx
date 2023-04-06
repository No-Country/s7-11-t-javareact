import { useState } from "react";
import  {BiError } from 'react-icons/bi';
const InputForm = ({
  label,
  placeholder,
  type,
  register,
  errorType,
  errorMessage,
}) => {
  const [errorVisible, setErrorVisible] = useState(true);

  const hideError = () => {
    setErrorVisible(false);
  };

  return (
    <div className="flex flex-col m-auto max-w-sm">
      <div className={`relative ${errorMessage && errorVisible ? 'pb-0' : 'pb-4'}`}>
        <label htmlFor={register.name} className="pb-[1%] font-medium text-gray-700">
          {label}
        </label>
        <input
          className={`w-full ${
            errorType ? 'border-red-500' : ''
          } text-base font-medium border h-10 border-gray-300 focus:outline-none rounded-lg pl-2 focus:bg-[#DAEDFF]`}
          type={type}
          id={register.name}
          placeholder={placeholder}
          {...register}
        />
        {errorMessage && errorVisible && (
          <div className="flex items-center">
            <BiError className="text-red-600 mr-2" />
            <span className="text-red-600 text-sm font-medium">{errorMessage}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default InputForm;
