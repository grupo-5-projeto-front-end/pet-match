import { toNamespacedPath } from "node:path/win32";
import { createContext, ReactNode, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api";
import { iLoginRegister, login } from "../services/requests/login";
import { iBodyPatchUser, patchUser } from "../services/requests/patchUser";
import { toast } from "react-toastify";

interface iUserProps {
  children: ReactNode;
}

interface iBodyRegister {
  name: string;
  city: string;
  adress: string;
  email: string;
  password: string;
  tel: string;
  avatar: string | null;
  favoritePets: [];
}

export interface iUser {
  email: string;
  name: string;
  city: string;
  adress: string;
  tel: string;
  avatar: string;
  favoritePets: [];
  id: number;
}

interface iUserContext {
  user: iUser | null;
  listOfUsers: iUser[] | null;
  onSubmitRegister: (body: iBodyRegister) => Promise<void>;
  onSubmitLogin: (body: iLoginRegister) => Promise<void>;
  getAllUsers: () => Promise<void>;
  handlePatchUser: (id: number, body: iBodyPatchUser) => Promise<void>;
  handleDeleteUser: (id: number) => Promise<void>;
}

export const UserContext = createContext<iUserContext>({} as iUserContext);

export const UserProvider = ({ children }: iUserProps) => {
  const [user, setUser] = useState<iUser | null>(null);
  const [listOfUsers, setListOfUsers] = useState<iUser[] | null>(null);

  const navigate = useNavigate();

  const onSubmitRegister = async (body: iBodyRegister): Promise<void> => {
    try {
      await api.post("/register", body);
      navigate("/login");
    } catch (error) {
      console.error(error);
    }
  };

  const onSubmitLogin = async (body: iLoginRegister): Promise<void> => {
    try {
      const data = await login(body);
      const { accessToken, user } = data;

      window.localStorage.clear();
      window.localStorage.setItem("@petmatch:token", accessToken);
      window.localStorage.setItem("@petmatch:userid", user.id.toString());
      setUser(user);
      toast.success("Login realizado com sucesso", {theme: "dark"})
      navigate("/dashboard");
    } catch (error: any) {
      console.log(error);
      error.response.data == "Cannot find user" || "Incorrect password" || "Password is too short"? 
      toast.error("Credenciais erradas", {theme: "dark"}) :
      toast.error("Ops! Algo deu errado", {theme: "dark"})
    }
  };

  const getAllUsers = async (): Promise<void> => {
    try {
      const { data } = await api.get("/users");
      setListOfUsers(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handlePatchUser = async (
    id: number,
    body: iBodyPatchUser
  ): Promise<void> => {
    try {
      const data = await patchUser(id, body);

      setUser(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDeleteUser = async (id: number): Promise<void> => {
    try {
      await api.delete(`/users/${id}`);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <UserContext.Provider
      value={{
        user,
        listOfUsers,
        onSubmitRegister,
        onSubmitLogin,
        getAllUsers,
        handlePatchUser,
        handleDeleteUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = (): iUserContext => {
  const context = useContext(UserContext);

  return context;
};
