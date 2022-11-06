import { Routes, Route } from 'react-router-dom';
import { Dashboard } from '../pages/Dashboard';
import { LoginPage } from '../pages/LoginPage';
import { PetDashboard } from '../pages/PetDashboard';
import { NotFoundPage } from '../pages/NotFoundPage';
import { RegisterPage } from '../pages/RegisterPage'

export const MainRoutes = () => (
  <Routes>
    <Route path={"/"} element={<h1>Landing Page</h1>}/>
    <Route path={"/login"} element={<LoginPage/>}/>
    <Route path={"/register"} element={<RegisterPage/>}/> 
    <Route path={"/dashboard"} element={<Dashboard/>} />
    <Route path={"/dashboard/my-pets"} element={<PetDashboard/>} />
    <Route path={"*"} element={<NotFoundPage/>}/>
  </Routes>

)
