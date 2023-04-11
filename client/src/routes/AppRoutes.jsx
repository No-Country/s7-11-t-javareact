import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import LandingPage from "@/pages/LandingPage/LandingPage";
import PrivateRoutes from "./PrivateRoutes/PrivateRoutes";
import Home from "@/pages/Home";
import ListPage from "@/pages/ListPage";

const AppRoutes = ({ isAuthenticated }) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/list" element={<ListPage />} />

        {/* <PrivateRoutes
        path="/Home"
        element={ <Home /> }
        isAuthenticated={isAuthenticated}
      /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
