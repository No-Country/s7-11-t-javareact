import React, { useState } from "react";

const Login = ({ setIsAuthenticated }) => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const ValidateLogin = () => {
    if (userName === "user@example.com" && password === "password123") {
      setIsAuthenticated(true);
    } else {
    }
  };
  return (
    <div className="grid justify-items-center items-center h-full">
      <div className="grid justify-items-center w-full max-w-md p-8 rounded-lg shadow-lg border border-gray-200 bg-gray-100">
        <h1 className="text-2xl font-bold mb-4">Iniciar sesión</h1>
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
              onChange={(e) => setUserName(e.target.value)}
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Contraseña"
            />
          </div>
          <div className="grid justify-items-center">
            <button
              className="bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline"
              type="button"
              onClick={ValidateLogin}
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
