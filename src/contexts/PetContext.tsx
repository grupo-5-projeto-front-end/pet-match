import { createContext, ReactNode, useContext, useState } from "react";
import { api } from "../services/api";
import { getPetsUser } from "../services/requests/getPetsUser";

interface iPetProps {
  children: ReactNode;
}

interface iCreatePetBody {
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

export const PetContext = createContext({});

export const PetProvider = ({ children }: iPetProps) => {
  const [userPets, setUserPets] = useState<iPet[] | null>(null);
  const [currentPet, setCurrentPet] = useState<iPet | null>(null);
  const [allPets, setAllPets] = useState<iPet[] | null>(null);

  const getAllPetsUser = async (id: number): Promise<void> => {
    try {
      const data = await getPetsUser(id);

      setUserPets(data.pets);
    } catch (error) {
      console.error(error);
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
        getAllPetsUser,
        getPetById,
        getAllPets,
        createPet,
      }}
    >
      {children}
    </PetContext.Provider>
  );
};

export const usePetContext = () => {
  const context = useContext(PetContext);

  return context;
};
