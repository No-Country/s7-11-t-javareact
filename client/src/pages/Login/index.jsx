import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import OrangeButton from "@/components/OrangeButton";
import InputForm from "@/components/InputForm";
import angledUnderline from "@/assets/images/angledUnderline.png";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { signInUser } from "@/api/access";
import { useState } from "react";

const Login = ({ setIsAuthenticated, isAuthenticated }) => {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setErrorMessage("");
    try {
      await signInUser(data);
      navigate("/home");
    } catch (error) {
      console.error(error);
      setErrorMessage("Hubo un error al iniciar sesión");
    }
  };

  return (
    <main className="bg-[url('../../assets/images/mainBg.png')] lg:bg-none bg-cover lg:pt-[3%]">
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
                name="nombreUsuario"
                register={register("nombreUsuario", { required: true })}
                errorType={errors.userName}
                errorMessage={
                  errors?.userName?.type === "required" &&
                  "Este campo es requerido"
                }
              />
            </div>

            <div className="relative">
              <InputForm
                label="Contraseña"
                name="password"
                register={register("password", { required: true })}
                errorType={errors.password}
                errorMessage={
                  errors?.password?.type === "required" &&
                  "Este campo es requerido"
                }
                type={showPassword ? "text" : "password"}
              />
              {errorMessage && (
                <div className="w-full text-red-500 text-xs flex justify-center items-center">
                  {errorMessage}
                </div>
              )}
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-0 top-2 bottom-0 px-2 flex justify-center items-center text-gray-500 focus:outline-none"
              >
                {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
              </button>
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
