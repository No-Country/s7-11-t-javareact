import { IoArrowUndo } from "react-icons/io5";
import { useNavigate } from "react-router";

const GoBack = ({ goTo = -1 }) => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(goTo);
  };

  return (
    <header className="absolute top-6 left-0 flex flex-row-reverse justify-between items-center m-auto">
      <button
        className="text-lg p-2 focus:bg-orange-300 rounded-xl border-1 border-violet-400 bg-violet-300 ml-4 min-w-max flex-shrink-0"
        onClick={handleGoBack}
      >
        <IoArrowUndo color="white" />
      </button>
    </header>
  );
};

export default GoBack;
