import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import { Link } from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage";
import AppRoutes from "./routes/AppRoutes";
import ListPage from "./pages/ListPage";
import CreateProduct from './pages/PrincipalList/CreateProducts'

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <div className="App">
        {/* <AppRoutes isAuthenticated={isAuthenticated} />       */}
        <CreateProduct/>
<ListPage/>
    </div>
  );
};

export default App;
