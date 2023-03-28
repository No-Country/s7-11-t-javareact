import { Link } from 'react-router-dom';

const Register = () => {
    return (
      <div
        className="grid  min-h-screen bg-cover bg-center bg-fixed"
        style={{ backgroundColor: `white` }}
      >
        <div className="grid justify-items-center items-center h-full">
          <div className="grid justify-items-center w-full max-w-md p-8 rounded-lg shadow-lg border border-gray-200 bg-gray-100">
            <h1 className="text-2xl font-bold mb-4">Registro</h1>
            <form className="space-y-4">
              <div>
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor="username"
                >
                  Nombre de usuario
                </label>
                <input
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="username"
                  type="text"
                  placeholder="Nombre de usuario"
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
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                  placeholder="Correo electrónico"
                />
              </div>
              <div>
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor="password"
                >
                  Contraseña
                </label>
                <input
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="password"
                  type="password"
                  placeholder="Contraseña"
                />
              </div>
              <div>
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor="confirm-password"
                >
                  Confirmar contraseña
                </label>
                <input
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="confirm-password"
                  type="password"
                  placeholder="Confirmar contraseña"
                />
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
  