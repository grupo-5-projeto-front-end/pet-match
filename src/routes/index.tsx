import { Routes, Route } from "react-router-dom";
import { Dashboard } from "../pages/Dashboard";
import { LandingPage } from "../pages/LandingPage";
import { LoginPage } from "../pages/LoginPage";
import { NotFoundPage } from "../pages/NotFoundPage";
import { RegisterPage } from "../pages/RegisterPage";

export const MainRoutes = () => (
  <Routes>
    <Route path={"/"} element={<LandingPage />} />
    <Route path={"/login"} element={<LoginPage />} />
    <Route path={"/register"} element={<RegisterPage />} />
    <Route path={"/dashboard"} element={<Dashboard />} />
    <Route path={"/dashboard/pet"} element={<h1>Visualizar Pet</h1>} />
    <Route path={"*"} element={<NotFoundPage />} />
  </Routes>
);
