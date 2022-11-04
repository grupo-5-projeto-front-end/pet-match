import { Routes, Route } from 'react-router-dom';
import { LoginPage } from '../pages/LoginPage';
import { NotFoundPage } from '../pages/NotFoundPage';
import { RegisterPage } from '../pages/RegisterPage'

export const MainRoutes = () => (
  <Routes>
    <Route path={"/"} element={<h1>Landing Page</h1>}/>
    <Route path={"/login"} element={<LoginPage/>}/>
    <Route path={"/register"} element={<RegisterPage/>}/> 
    <Route path={"/dashboard"} element={<h1>Dashboard</h1>} />
    <Route path={"/dashboard/pet"} element={<h1>Visualizar Pet</h1>} />
    <Route path={"*"} element={<NotFoundPage/>}/>
  </Routes>

)
