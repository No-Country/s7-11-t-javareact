
import { IoChevronBackOutline } from "react-icons/io5"
import { useNavigate } from "react-router"

const GoBack = ({ goTo = -1 }) => {
  const navigate = useNavigate()

  const handleGoBack = () => {
    navigate(goTo)
  }

  return (
    <header className="fixed pt-1.5 top-5 left-0 flex flex-row-reverse justify-between items-center m-auto">
      <span className="w-full flex justify-center py-4 mr-11 text-2xl">
        
      </span>

      <button
        className="text-lg px-1.5 py-1.5 border-2 border-neutral-200 rounded-xl focus:border-blue-700 ml-4 min-w-max flex-shrink-0"
        onClick={handleGoBack}
      >
        <IoChevronBackOutline />
      </button>
    </header>
  )
}

export default GoBack;
