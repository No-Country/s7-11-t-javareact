import React from "react";
import { useForm } from "react-hook-form";

const Login = ({ setIsAuthenticated }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    if (data.userName === "user@example.com" && data.password === "password123") {
      setIsAuthenticated(true);
    }
  };

  return (
    <div className="grid justify-items-center items-center h-full">
      <div className="grid justify-items-center w-full max-w-md p-8 rounded-lg shadow-lg border border-gray-200 bg-gray-100">
        <h1 className="text-2xl font-bold mb-4">Iniciar sesión</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="username"
            >
              Nombre de usuario
            </label>
            <input
              className={`appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.userName && 'border-red-500'}`}
              id="username"
              type="text"
              placeholder="Nombre de usuario"
              {...register("userName", { required: true })}
            />
            {errors.userName && <span className="text-red-500">Este campo es requerido</span>}
          </div>
          <div>
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="password"
            >
              Contraseña
            </label>
            <input
              className={`appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.password && 'border-red-500'}`}
              id="password"
              type="password"
              placeholder="Contraseña"
              {...register("password", { required: true })}
            />
            {errors.password && <span className="text-red-500">Este campo es requerido</span>}
          </div>
          <div className="grid justify-items-center">
            <button
              className="bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Iniciar sesión
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
