import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div
      className="grid  min-h-screen bg-cover bg-center bg-fixed bg-gradient"
      style={{ backgroundColor: `white` }}
    >
      <div className="grid justify-items-center items-center h-full p-4 ">
        <div className="grid justify-items-center w-full max-w-md px-[4%] min-w-[321px]:px-8 py-8 rounded-lg shadow-lg border border-gray-200 bg-gray-100">
          <h1 className="text-2xl font-bold mb-4">Registro</h1>
          <form
            className="space-y-4 w-full px-[10%]"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div>
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="username"
              >
                Nombre de usuario
              </label>
              <input
                className={`appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                  errors.username ? "border-red-500" : ""
                }`}
                id="username"
                type="text"
                placeholder="Nombre de usuario"
                {...register("username", { required: true })}
              />
            </div>
            <div>
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="email"
              >
                Correo electrónico
              </label>
              <input
                className={`appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                  errors.email ? "border-red-500" : ""
                }`}
                id="email"
                type="email"
                placeholder="Correo electrónico"
                {...register("email", {
                  required: true,
                  pattern: /^\S+@\S+$/i,
                })}
              />
              {errors.email && errors.email.type === "required" && (
                <p className="text-red-500">Este campo es requerido</p>
              )}
              {errors.email && errors.email.type === "pattern" && (
                <p className="text-red-500">Correo electrónico inválido</p>
              )}
            </div>
            <div>
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="password"
              >
                Contraseña
              </label>
              <input
                className={`appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                  errors.password ? "border-red-500" : ""
                }`}
                id="password"
                type="password"
                placeholder="Contraseña"
                {...register("password", { required: true, minLength: 6 })}
              />
              {errors.password && errors.password.type === "required" && (
                <p className="text-red-500">Este campo es requerido</p>
              )}
              {errors.password && errors.password.type === "minLength" && (
                <p className="text-red-500">
                  La contraseña debe tener al menos 6 caracteres
                </p>
              )}
            </div>
            <div>
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="confirm-password"
              >
                Confirmar contraseña
              </label>
              <input
               className={`appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.password ? 'border-red-500' : ''}`}
                id="confirm-password"
                type="password"
                placeholder="Confirmar contraseña"
                {...register("confirm-password", { required: true, minLength: 6 })}
              />
              {errors.password && errors.password.type === 'required' && <p className="text-red-500">Este campo es requerido</p>}
              {errors.password && errors.password.type === 'minLength' && <p className="text-red-500">La contraseña debe tener al menos 6 caracteres</p>}
            </div>
            <div className="grid justify-items-center">
              <button
                className="bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Registrarse
              </button>
              <div className="flex flex-wrap mt-[4%] text-center">
                ¿Ya estás registrado?
                <Link
                  className="text-blue-500 hover:text-blue-700 ml-1"
                  to="/login"
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
