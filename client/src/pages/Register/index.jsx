import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const Register = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  
  const onSubmit = data => {
    console.log(data);
  };
  
  return (
    <div
      className="grid  min-h-screen bg-cover bg-center bg-fixed"
      style={{ backgroundColor: `white` }}
    >
      <div className="grid justify-items-center items-center h-full">
        <div className="grid justify-items-center w-full max-w-md p-8 rounded-lg shadow-lg border border-gray-200 bg-gray-100">
          <h1 className="text-2xl font-bold mb-4">Registro</h1>
          <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="username"
              >
                Nombre de usuario
              </label>
              <input
                {...register("username", { required: true })}
                className={`appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.username ? 'border-red-500' : ''}`}
                id="username"
                type="text"
                placeholder="Nombre de usuario"
              />
              {errors.username && <p className="text-red-500">Este campo es requerido</p>}
            </div>
            <div>
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="email"
              >
                Correo electrónico
              </label>
              <input
                {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
                className={`appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.email ? 'border-red-500' : ''}`}
                id="email"
                type="email"
                placeholder="Correo electrónico"
              />
              {errors.email && errors.email.type === 'required' && <p className="text-red-500">Este campo es requerido</p>}
              {errors.email && errors.email.type === 'pattern' && <p className="text-red-500">Correo electrónico inválido</p>}
            </div>
            <div>
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="password"
              >
                Contraseña
              </label>
              <input
                {...register("password", { required: true, minLength: 6 })}
                className={`appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.password ? 'border-red-500' : ''}`}
                id="password"
                type="password"
                placeholder="Contraseña"
              />
              {errors.password && errors.password.type === 'required' && <p className="text-red-500">Este campo es requerido</p>}
              {errors.password && errors.password.type === 'minLength' && <p className="text-red-500">La contraseña debe tener al menos 6 caracteres</p>}
            </div>
            <div>
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="confirm-password"
              >
                Confirmar contraseña
              </label>
              <input
                {...register("confirm-password", { required: true, minLength: 6 })}
                className={`appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.password ? 'border-red-500' : ''}`}
                id="password"
                type="password"
                placeholder="Confirmar contraseña"
              />
              {errors.password && errors.password.type === 'required' && <p className="text-red-500">Este campo es requerido</p>}
              {errors.password && errors.password.type === 'minLength' && <p className="text-red-500">La contraseña debe tener al menos 6 caracteres</p>}
            </div>
              <div className="grid justify-items-center">
                <button
                  className="bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="button"
                >
                  Registrarse
                </button>
                <p className="mt-4">
                ¿Ya estás registrado?
                <Link
                  className="text-blue-500 hover:text-blue-700 ml-1"
                  to="/login"
                >
                  Iniciar sesión
                </Link>
              </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  };
  
  export default Register;
  