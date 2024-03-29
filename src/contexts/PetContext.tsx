import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../services/api";
import { getPetsUser } from "../services/requests/getPetsUser";
import { iBodyPatchPet, patchPet } from "../services/requests/patchPet";
import { useModalContext } from "./ModalContext";

interface iPetProps {
  children: ReactNode;
}

export interface iCreatePetBody {
  userId: number;
  name: string;
  sex: string;
  category: string;
  breed: string;
  age: string;
  bio: string;
  avatar: string;
  image: string[];
  visible: boolean;
}

export interface iPet {
  userId: number;
  name: string;
  sex: string;
  category: string;
  breed: string;
  age: string;
  bio: string;
  avatar: string;
  image: string[];
  visible: boolean;
  id: number;
}

export interface IuserAndPets {
  adress: string;
  avatar: string;
  city: string;
  email: string;
  pets: iPet[];
  id: string;
  name: string;
  password?: string;
  tel: string;
}

export interface iPetContext {
  userPets: iPet[] | null;
  currentPet: iPet | null;
  userAndPets: IuserAndPets | null;
  allPets: iPet[] | null;
  loading: boolean;
  treatedSearch: string;
  getAllPetsUser: (id: number) => Promise<void>;
  getAllPetsAndUser: (id: number) => Promise<void>;
  getPetById: (id: number | string) => Promise<void>;
  getAllPets: () => Promise<void>;
  createPet: (body: iCreatePetBody) => Promise<void>;
  handlePatchPet: (id: number, body: iBodyPatchPet) => Promise<void>;
  deletePet: (id: number) => Promise<void>;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}

export const PetContext = createContext<iPetContext>({} as iPetContext);

export const PetProvider = ({ children }: iPetProps) => {
  const token = localStorage.getItem("@petmatch:token");
  const { closeCreatPet, toggleEditPetModal, toggleDeletePetModal } =
    useModalContext();
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [userPets, setUserPets] = useState<iPet[] | null>(null);
  const [userAndPets, setUserAndPets] = useState<IuserAndPets | null>(null);
  const [currentPet, setCurrentPet] = useState<iPet | null>(null);
  const [allPets, setAllPets] = useState<iPet[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [search, setSearch] = useState<string>("");

  // Tratamento do state search para pesquisa na dashboard
  const treatedSearch = search
    .toLowerCase()
    .normalize("NFD")
    .trim()
    .replace(/[\u0300-\u036f]/g, "");

  // useEffect para renderizar os cards de pets na montagem da dashboard
  useEffect(() => {
    const loadPets = async () => {
      try {
        const { data } = await api.get("/pets");
        setAllPets(data);
      } catch (error: unknown) {
        toast.error("Ops! Algo deu errado. Faça seu login novamente!", {
          theme: "dark",
        });
        localStorage.clear();
        navigate("/");
      } finally {
        setLoading(false);
      }
    };

    if (pathname === "/dashboard" || pathname === "/") {
      loadPets();
    }

    if (!pathname.includes("/dashboard") && token) {
      navigate("/dashboard");
    }
  }, [pathname, navigate]);

  const getAllPetsUser = async (id: number): Promise<void> => {
    try {
      api.defaults.headers.authorization = `Bearer ${token}`;
      const data = await getPetsUser(id);

      setUserPets(data.pets);
    } catch (error) {
      console.error(error);
      toast.error("Ops! Algo deu errado", { theme: "dark" });
      navigate("/dashboard");
    } finally {
      setLoading(false);
    }
  };

  const getAllPetsAndUser = async (id: number): Promise<void> => {
    try {
      api.defaults.headers.authorization = `Bearer ${token}`;
      const { data } = await api.get(`/users/${id}/?_embed=pets`);
      setUserAndPets(data);
    } catch (error) {
      console.error(error);
    }
  };

  const getPetById = async (id: string | number): Promise<void> => {
    try {
      const { data } = await api.get(`/pets/${id}`);

      setCurrentPet(data);
    } catch (error) {
      console.error(error);
    }
  };

  const getAllPets = async (): Promise<void> => {
    try {
      const { data } = await api.get("/pets");

      setAllPets(data);
    } catch (error) {
      console.error(error);
    }
  };

  const createPet = async (body: iCreatePetBody): Promise<void> => {
    try {
      body.userId = +body.userId;
      const token = localStorage.getItem("@petmatch:token");
      api.defaults.headers.authorization = `Bearer ${token}`;
      await api.post("/pets", body);
      toast.success("Pet adicionado com sucesso!", { theme: "dark" });
      closeCreatPet();
      getAllPets();
    } catch (error) {
      console.error(error);
      toast.error("Ops! Algo deu errado", { theme: "dark" });
    }
  };

  const handlePatchPet = async (
    id: number,
    body: iBodyPatchPet
  ): Promise<void> => {
    try {
      await patchPet(id, body);
      toggleEditPetModal();
      toast.success("Pet atualizado com sucesso!", { theme: "dark" });
    } catch (error) {
      console.error(error);
      toast.error("Ops! Algo deu errado", { theme: "dark" });
    }
  };

  const deletePet = async (id: number): Promise<void> => {
    try {
      await api.delete(`/pets/${id}`);
      toggleDeletePetModal();
      toast.success("Pet deletado com sucesso!", { theme: "dark" });
    } catch (error) {
      console.error(error);
      toast.error("Ops! Algo deu errado", { theme: "dark" });
    }
  };

  return (
    <PetContext.Provider
      value={{
        userPets,
        currentPet,
        userAndPets,
        allPets,
        loading,
        treatedSearch,
        getAllPetsUser,
        getAllPetsAndUser,
        getPetById,
        getAllPets,
        createPet,
        handlePatchPet,
        deletePet,
        setLoading,
        setSearch,
      }}
    >
      {children}
    </PetContext.Provider>
  );
};

export const usePetContext = (): iPetContext => {
  const context = useContext(PetContext);

  return context;
};
