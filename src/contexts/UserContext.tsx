import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { api } from "../services/api";
import { iLoginRegister, login } from "../services/requests/login";
import { iBodyPatchUser } from "../services/requests/patchUser";
import { toast } from "react-toastify";
import { useModalContext } from "./ModalContext";

interface iUserProps {
  children: ReactNode;
}

export interface iBodyRegister {
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
  handlePatchUser: (body: iBodyPatchUser) => Promise<void>;
  handleDeleteUser: (id: number) => Promise<void>;
}

export const UserContext = createContext<iUserContext>({} as iUserContext);

export const UserProvider = ({ children }: iUserProps) => {
  const { closeModal } = useModalContext();
  const [user, setUser] = useState<iUser | null>(null);
  const [listOfUsers, setListOfUsers] = useState<iUser[] | null>(null);
  const { pathname } = useLocation();

  const navigate = useNavigate();

  useEffect(() => {
    const id = window.localStorage.getItem("@petmatch:userid");

    if (pathname === "/dashboard") {
      getUserById(Number(id));
    }
  }, [pathname]);

  const onSubmitRegister = async (body: iBodyRegister): Promise<void> => {
    try {
      await api.post("/register", body);
      toast.success("Conta criada com sucesso!", { theme: "dark" });
      navigate("/login");
    } catch (error) {
      toast.error("Ops! Algo deu errado! Verifique os campos novamente!", {
        theme: "dark",
      });
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
      toast.success("Login realizado com sucesso", { theme: "dark" });
      navigate("/dashboard");
    } catch (error: any) {
      console.log(error);
      error.response.data === "Cannot find user" ||
      "Incorrect password" ||
      "Password is too short"
        ? toast.error("Credenciais erradas", { theme: "dark" })
        : toast.error("Ops! Algo deu errado", { theme: "dark" });
    }
  };

  const getUserById = async (id: number): Promise<void> => {
    try {
      const { data } = await api.get(`/users/${id}`);
      setUser(data);
    } catch (error) {
      console.error(error);
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

  const handlePatchUser = async (body: iBodyPatchUser): Promise<void> => {
    try {
      const userId = localStorage.getItem("@petmatch:userid");
      const { data } = await api.patch(`/users/${userId}`, body);
      toast.success("Editado com Suceso!", { theme: "dark" });
      closeModal();
      setUser(data);
    } catch (error) {
      console.error(error);
      toast.error("Ops! Algo deu errado", { theme: "dark" });
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
