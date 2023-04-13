import { useNavigate } from "react-router-dom";
import Carousel from "@/components/Carousel";
import Login from "../Login";
import mainBg from "../../assets/images/mainBg.png";
import Logo from "../../assets/images/Logo.png";
import Compra from "@/assets/images/Compra.png";
import OrangeButton from "@/components/OrangeButton";
import Listo from "@/assets/images/Listo.png";

const LandingPage = () => {
  const navigate = useNavigate();

  const controlRegisterClick = () => {
    navigate("/register");
  };
  const controlLoginClick = () => {
    navigate("/login");
  };

  return (
    <div className="flex flex-col h-screen lg:h-full w-full lg:bg-contain bg-[url('../../assets/images/mainBg.png')]">
      <div className="lg:gap-0 lg:grid lg:grid-cols-2 h-full bg-white bg-opacity-80 lg:py-5 lg:pl-6">
        <div className="flex flex-col lg:flex-row lg:self-start lg:h-full items-center text-center p-4 lg:p-0">
          {/*  div 1 *lg:bg-gray-200 */}
          <div className="lg:hidden w-24 h-24 rounded-full shadow-md">
            <div className="w-full h-full rounded-full bg-white flex items-center justify-center shadow-lg border-4 border-gray-200">
              <img
                src={Logo}
                alt="Logo"
                className="rounded-full object-contain w-full h-full"
              />
            </div>
          </div>
          <div className="flex flex-wrap py-4">
            <img src={Compra} className="h-[5rem] hidden lg:block" />
            <img src={Listo} className="h-auto hidden lg:block" />
            <p className="text-lg m-auto">
              La comunidad de compradores eficientes
            </p>
          </div>
        </div>
        <div className="flex-col items-center justify-center hidden  lg:block">
          {/*  div 2 *lg:bg-gray-300 */}
          <Login />
          <div className="flex flex-col text-center gap-6 lg:m-auto pt-4 px-[16%] md:px-[30%]">
            <p className="m-auto">Ahorra tiempo en tus compras y</p>
            <h2 className="text-2xl font-bold">¡Regístrate hoy!</h2>
            <OrangeButton text="Registrarse" onClick={controlRegisterClick} />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center">
          {/*  div 3 *lg:bg-gray-500 */}

          <Carousel />
        </div>
        <div className="px-4 w-full flex flex-col gap-4 text-center ">
          {/*  div 4 *lg:bg-gray-400 */}
          <div></div>

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
    </div>
  );
};

export default LandingPage;
