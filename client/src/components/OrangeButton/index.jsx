import React from "react"

const OrangeButton = ({ text, type, onClick, className }) => {
  const handleClick = () => {
    if (onClick) {
      onClick(onClick)
    }
  }
  return (
    <div className={className}>
      <button
        type={type}
        className="w-full self-center font-button text-button bg-orange-400 py-3 rounded-lg text-gray-50"
        onClick={handleClick}
      > 
      {/* bg-[#38A1ED] */}
        {text}
      </button>
    </div>
  )
}

export default OrangeButton