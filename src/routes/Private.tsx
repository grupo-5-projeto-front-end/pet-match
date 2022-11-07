import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useUserContext } from "../contexts/UserContext";

export const Private = () => {
  const { privateRoute } = useUserContext();

  return privateRoute ? <Outlet/>: <Navigate to={"/"} />
};
