import { Routes, Route } from "react-router-dom";
import { Dashboard } from "../pages/Dashboard";
import { LoginPage } from "../pages/LoginPage";
import { PetDashboard } from "../pages/PetDashboard";
import { NotFoundPage } from "../pages/NotFoundPage";
import { RegisterPage } from "../pages/RegisterPage";
import { LandingPage } from "../pages/LandingPage";
import { PerfilPet } from "../pages/PerfilPet";

export const MainRoutes = () => (
  <Routes>
    <Route path={"/"} element={<LandingPage />} />
    <Route path={"/login"} element={<LoginPage />} />
    <Route path={"/register"} element={<RegisterPage />} />
    <Route path={"/dashboard"} element={<Dashboard />} />
    <Route path={"/dashboard/my-pets"} element={<PetDashboard />} />    
    <Route path={"/dashboard/pets/:id"} element={<PerfilPet/>} />
    <Route path={"*"} element={<NotFoundPage />} />
  </Routes>
);
