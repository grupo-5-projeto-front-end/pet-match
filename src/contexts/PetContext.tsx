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

export interface iPetContext {
  userPets: iPet[] | null;
  currentPet: iPet | null;
  allPets: iPet[] | null;
  loading: boolean;
  treatedSearch: string;
  getAllPetsUser: (id: number) => Promise<void>;
  getPetById: (id: number) => Promise<void>;
  getAllPets: () => Promise<void>;
  createPet: (body: iCreatePetBody) => Promise<void>;
  handlePatchPet: (id: number, body: iBodyPatchPet) => Promise<void>;
  deletePet: (id: number) => Promise<void>;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}

export const PetContext = createContext<iPetContext>({} as iPetContext);

export const PetProvider = ({ children }: iPetProps) => {
  const { closeCreatPet } = useModalContext();
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [userPets, setUserPets] = useState<iPet[] | null>(null);
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
  }, [pathname, navigate]);

  useEffect(() => {
    const id = localStorage.getItem("@petmatch:userid") as unknown as number
    getAllPetsUser(id)
  }, [])

  const getAllPetsUser = async (id: number): Promise<void> => {
    

    try {
      const data = await getPetsUser(id)

      setUserPets(data.pets);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false)
    }
  };

  const getPetById = async (id: number): Promise<void> => {
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
      await api.post("/pets", body);
      toast.success("Pet adicionado com sucesso!", { theme: "dark" });
      closeCreatPet();
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
    } catch (error) {
      console.error(error);
    }
  };

  const deletePet = async (id: number): Promise<void> => {
    try {
      await api.delete(`/pets/${id}`);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <PetContext.Provider
      value={{
        userPets,
        currentPet,
        allPets,
        loading,
        treatedSearch,
        getAllPetsUser,
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
