import { createContext, ReactNode, useContext, useState } from "react";
import { api } from "../services/api";
import { getPetsUser } from "../services/requests/getPetsUser";
import { iBodyPatchPet, patchPet } from "../services/requests/patchPet";

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

export interface iPetContext {
  userPets: iPet[] | null;
  currentPet: iPet | null;
  allPets: iPet[] | null;
  getAllPetsUser: (id: number) => Promise<void>;
  getPetById: (id: number) => Promise<void>;
  getAllPets: () => Promise<void>;
  createPet: (body: iCreatePetBody) => Promise<void>;
  handlePatchPet: (id: number, body: iBodyPatchPet) => Promise<void>;
  deletePet: (id: number) => Promise<void>;
}

export const PetContext = createContext<iPetContext>({} as iPetContext);

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
        getAllPetsUser,
        getPetById,
        getAllPets,
        createPet,
        handlePatchPet,
        deletePet,
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
