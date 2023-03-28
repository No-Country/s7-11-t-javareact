import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import LandingPage from "../pages/LandingPage/LandingPage";
import PrivateRoutes from "./PrivateRoutes/PrivateRoutes";
import Home from "../pages/Home";

const AppRoutes = ({ isAuthenticated }) =>{
  return (
    <Routes>
      <Route path="/" element={ <LandingPage /> }/>
      <Route path="/login"  element={ <Login /> }/>
      <Route path="/register" element={ <Register /> }/>
      {/* <PrivateRoutes
        path="/Home"
        element={ <Home /> }
        isAuthenticated={isAuthenticated}
      /> */}
    </Routes>
  );
}

export default AppRoutes;
