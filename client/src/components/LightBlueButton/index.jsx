import React from "react"

const LightBlueButton = ({ text, type, onClick, className }) => {
  const handleClick = () => {
    if (onClick) {
      onClick(onClick)
    }
  }
  return (
    <div className={className}>
      <button
        type={type}
        className="w-full self-center font-button text-button bg-[#38A1ED] py-3 rounded-lg text-gray-50"
        onClick={handleClick}
      >
        {text}
      </button>
    </div>
  )
}

export default LightBlueButton