import { useNavigate } from "react-router-dom";
import Carousel from "@/components/Carousel";
import Login from "../Login";
import mainBg from "../../assets/images/mainBg.png";
import Logo from "../../assets/images/Logo.png";
import Compra from "@/assets/images/Compra.png";
import OrangeButton from "@/components/OrangeButton";
import Listo from "@/assets/images/Listo.png";
import angledUnderline from "@/assets/images/angledUnderline.png";
import orangeSub from "@/assets/images/orangeSub.png";
import NavBar from "@/layouts/NavBar";

const LandingPage = () => {
  const navigate = useNavigate();

  const controlRegisterClick = () => {
    navigate("/register");
  };
  const controlLoginClick = () => {
    navigate("/login");
  };

  return (
    <div className="z-0 flex flex-col h-screen lg:h-full w-full lg:bg-contain bg-[url('../../assets/images/mainBg.png')]">
      <div className="lg:gap-0 lg:grid lg:grid-cols-2 h-full bg-white bg-opacity-80  lg:pl-6">
        <div className="flex flex-col lg:flex-row lg:self-start lg:h-full items-center text-center">
          {/*  div 1 */}
          <div className="lg:hidden w-24 h-24 rounded-full shadow-md">
            <div className="w-full h-full rounded-full bg-white flex items-center justify-center shadow-lg border-4 border-gray-200">
              <img
                src={Logo}
                alt="Logo"
                className="rounded-full object-contain w-full h-full"
              />
            </div>
          </div>
          <div className="flex flex-wrap pt-2 sm:py-4">
            <img src={Compra} className="h-[5rem] hidden lg:block" />
            <img src={Listo} className="h-auto hidden lg:block" />
            <div className="flex-col m-auto">
              <p className="text-2xl tracking-2 font-damion">
                La comunidad de compradores eficientes
              </p>          <img className="w-[17rem] py-2 m-auto" src={angledUnderline} />

            </div>
          </div>
        </div>
        <div className="flex-col items-center justify-center hidden  lg:block">
          {/*  div 2 */}
          <h2 className="text-2xl text-center tracking-2 font-damion">
            ¡Bienvenido!
          </h2>
          {/* <p className="text-2xl tracking-2 font-damion">
          ¡Bienvenido! </p> */}
          <Login />
          <img
            className="hidden lg:block w-[26rem] lg:w-[36rem]"
            src={angledUnderline}
          />
        </div>
        <div className="flex flex-col items-center justify-center">
          {/*  div 3 */}
          <Carousel />
        </div>

        <div className="px-4 pb-4 w-full flex flex-col gap-4 text-center ">
          {/*  div 4 */}
          <div>
            {" "}
            <div className="flex flex-col text-center gap-4 sm:gap-6 lg:m-auto pt-4 sm:px-[14%] md:px-[30%]">
              <p className="m-auto">Ahorra tiempo en tus compras y</p>
              <h2 className="text-2xl font-bold">¡Regístrate hoy!</h2>
              <OrangeButton text="Registrarse" onClick={controlRegisterClick} />
            </div>
          </div>

          <div className="flex flex-col lg:hidden">
            <p className="text-lg">
              Si ya tienes una cuenta inicia sesión
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
