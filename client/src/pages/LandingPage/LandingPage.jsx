import { useNavigate } from "react-router-dom";
import Carousel from "../../components/Carousel";
import Login from "../Login";

const LandingPage = () => {
  const navigate = useNavigate();

  const controlRegisterClick = () => {
    navigate("/register");
  };
  const controlLoginClick = () => {
    navigate("/login");
  };

  return (
    <div className="flex flex-col lg:grid lg:grid-cols-2 gap-4 h-screen lg:bg-gray-200">
      <div className="flex flex-col gap-11 lg:self-start lg:h-full text-center">
        {/*  div 1 *lg:bg-gray-200 */}
        <h2 className="text-2xl font-bold pt-[5%]">Compra LISTo</h2>
        <p className="m-auto">LOGO</p>
        <p className="text-lg hidden lg:block">
          ¡Únete a nuestra comunidad y obtén acceso a grandes ventajas!
        </p>
      </div>
      <div className="flex-col items-center justify-center hidden  lg:block">
        {/*  div 2 *lg:bg-gray-300 */}
        <h2 className="text-2xl text-center font-bold">Bienvenido</h2>
        <Login paddingTop={0}/>
      </div>
      <div className="flex items-center justify-center">
        {/*  div 3 *lg:bg-gray-500 */}
        <Carousel />
      </div>
      <div className="px-4 flex flex-col gap-4 text-center lg:m-auto">
        {/*  div 4 *lg:bg-gray-400 */}
        <div className="gap-3">
          <p className="m-auto">Ahorra tiempo en tus compras y</p>
          <h2 className="text-2xl font-bold">¡Regístrate hoy!</h2>
          <button
            onClick={controlRegisterClick}
            className="bg-black text-white py-2 px-4 rounded-md hover:bg-gray-700 focus:outline-none focus:shadow-outline focus:ring-offset-2 my-4"
          >
            Registrarse
          </button>
        </div>
        <div className="flex flex-col lg:hidden">
          <p className="text-lg">
            Si ya tienes una cuenta inicia sesión{" "}
            <span>
              <a
                onClick={controlLoginClick}
                className="text-blue-500 hover:text-blue-700 ml-1"
              >
                aquí.
              </a>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LandingPage; 