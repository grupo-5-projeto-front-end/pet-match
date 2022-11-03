import { Routes, Route } from 'react-router-dom';
import { LoginPage } from '../pages/LoginPage';
import { PetDashboard } from '../pages/PetDashboard';

export const MainRoutes = () => (
  <Routes>
    <Route path={"/"} element={<h1>Landing Page</h1>}/>
    <Route path={"/login"} element={<LoginPage/>}/>
    <Route path={"/register"} element={<h1>Register</h1>} />
    <Route path={"/dashboard"} element={<h1>Dashboard</h1>} />
    <Route path={"/dashboard/pet"} element={<h1>Visualizar Pet</h1>} />
    <Route path={"/dashboard/my-pets"} element={<PetDashboard/>} />
    <Route path={"*"} element={<h1>Rota não autorizada</h1>}/>
  </Routes>
)
