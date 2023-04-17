import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import OrangeButton from "@/components/OrangeButton";
import InputForm from "@/components/InputForm";
import angledUnderline from "@/assets/images/angledUnderline.png";
import GoBack from "@/layouts/GoBack";
import mainBg from "../../assets/images/mainBg.png";
import { useState } from "react";

const Login = ({setIsAuthenticated,isAuthenticated, paddingTop }) => {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");
  const controlHomeClick = () => {
    navigate("/home");
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    if (
      data.userName === "user@example.com" &&
      data.password === "password123"
    ) {
      //setIsAuthenticated(true);
      controlHomeClick();
    } else {
      setErrorMessage("Nombre de usuario o contraseña incorrectos"); // actualiza el mensaje de error si las credenciales son incorrectas
    }
  };


  const ValidateLogin = () => {
    if (userName === "user@example.com" && password === "password123") {
      setIsAuthenticated(true);
    } else {
    }
  };

  return (
    <main className="bg-[url('../../assets/images/mainBg.png')] lg:bg-none bg-cover lg:pt-[3%]">
      <div className="lg:hidden"></div>

      <div className="grid justify-items-center items-center h-screen lg:h-full  bg-white bg-opacity-80 lg:bg-transparent p-4 lg:p-0">
        <div className="grid justify-items-center w-full lg:max-w-md max-w-sm px-[4%] min-w-[321px]:px-[7%] py-7 rounded-lg shadow-lg border border-gray-200 bg-white bg-opacity-90">
          <h1 className="text-2xl font-bold mb-4 text-center">
            Iniciar sesión
          </h1>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-4 w-full px-[6%] lg:px-[10%]"
          >
            <div>
              <InputForm
                label="Nombre de usuario"
                name="userName"
                register={register("userName", { required: true })}
                errorType={errors.userName}
                errorMessage={
                  errors?.userName?.type === "required" &&
                  "Este campo es requerido"
                }
              />
            </div>

            <div>
              <InputForm
                label="Contraseña"
                name="password"
                register={register("password", { required: true })}
                errorType={errors.password}
                errorMessage={
                  errors?.password?.type === "required" &&
                  "Este campo es requerido"
                }
                type="password"
              />
                {errorMessage && (
               <div className="w-full text-red-500 text-xs flex justify-center items-center">{errorMessage}</div>
            )}
            </div>
          
            <div className="px-6">
              <OrangeButton text="Iniciar Sesion" type="submit" />
            </div>
          </form>
        </div>
      </div>
      <div className="flex mt-3 self-end justify-center">
        <img
          className="hidden lg:block w-[26rem] lg:w-[36rem]"
          src={angledUnderline}
        />
      </div>
    </main>
  );
};

export default Login;
