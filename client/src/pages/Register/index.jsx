import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import OrangeButton from "../../components/OrangeButton";
import InputForm from "../../components/InputForm";
import GoBack from "@/layouts/GoBack";

import mainBg from "@/assets/images/mainBg.webp";
import smallLogo from "@/assets/images/smallLogo.webp";

import { signUpUser } from "@/api/access";

const Register = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm();
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (data) => {
    console.log(data);

    try {
      setIsLoading(true);

      const payload = {
        nombre: data.name,
        nombreUsuario: data.username,
        email: data.email,
        password: data.password,
      };
      const response = await signUpUser(payload);
      console.log(response);
      alert("Registro Exitoso");
      navigate("/");
    } catch (error) {
      console.log(error);
      console.log(error?.response);
      alert(`Error al registrar ${error?.response?.data?.mensaje}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      className="grid  min-h-screen bg-center bg-fixed bg-[url('../../assets/images/mainBg.webp')] lg:bg-none bg-contain"
      style={{
        backgroundImage: `url(${mainBg})`,
      }}
    >
      <div
        className="grid justify-items-center items-center h-full p-4 "
        style={{ backgroundColor: "rgba(255, 255, 255, 0.8)" }}
      >
        <div className="grid justify-items-center w-full max-w-md px-[3%] min-w-[321px]:px-6 py-[2%] rounded-lg shadow-lg border border-gray-200 bg-white">
          <h1 className="text-2xl font-bold mb-4">Registro</h1>
          <form className="w-full px-[10%]" onSubmit={handleSubmit(onSubmit)}>
            <InputForm
              label="Nombre"
              placeholder="Escribe tu nombre"
              type="text"
              register={register("name", {
                required: "Por favor, ingresa tu nombre",
              })}
              errorType={errors.username}
              errorMessage={errors.username?.message}
            />
            <InputForm
              label="Usuario"
              placeholder="Escribe tu usuario"
              type="text"
              register={register("username", {
                required: "Por favor, ingresa tu nombre de usuario",
              })}
              errorType={errors.username}
              errorMessage={errors.username?.message}
            />

            <InputForm
              label="Correo electrónico"
              placeholder="Correo electrónico"
              type="email"
              register={register("email", {
                required: "Por favor, ingresa tu correo electronico",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Correo electrónico inválido",
                },
              })}
              errorType={errors.email}
              errorMessage={errors.email?.message}
            />

            <InputForm
              label="Contraseña"
              placeholder="Contraseña"
              type="password"
              register={register("password", {
                required: "Debe ingresar una contraseña",
                minLength: {
                  value: 6,
                  message: "La contraseña debe tener al menos 6 caracteres",
                },
              })}
              errorType={errors.password}
              errorMessage={errors.password?.message}
            />

            <InputForm
              label="Confirmar contraseña"
              placeholder="Confirmar contraseña"
              type="password"
              register={register("confirmPassword", {
                required: "Confirme su contraseña",
                minLength: {
                  value: 6,
                  message: "La contraseña debe tener al menos 6 caracteres",
                },
                validate: (value) =>
                  value === getValues("password") ||
                  "Las contraseñas no coinciden",
              })}
              errorType={errors.confirmPassword}
              errorMessage={errors.confirmPassword?.message}
            />

            {isLoading ? (
              <div className="overflow-hidden relative">
                <img
                  src={smallLogo}
                  className="relative h-14 sm:h-22 w-auto m-auto animate-spinning-cart"
                />
                <p className="absolute top-0 left-0 text-center w-full">
                  Cargando...
                </p>
              </div>
            ) : (
              <OrangeButton type="submit" text="Registrarse" />
            )}
            <div className="flex flex-col justify-center">
              <div className="flex flex-wrap mt-[4%] text-center">
                ¿Ya estás registrado?
                <Link
                  className="text-blue-500 hover:text-blue-700 ml-1 lg:ml-4"
                  to="/"
                >
                  Iniciar sesión
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
