import { createContext, ReactNode, useContext } from "react";
import { api } from "../services/api";

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

export const PetContext = createContext({});

export const PetProvider = ({ children }: iPetProps) => {
  const createPet = async (body: iCreatePetBody): Promise<void> => {
    try {
      await api.post("/pets", body);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <PetContext.Provider value={{ createPet }}>{children}</PetContext.Provider>
  );
};

export const usePetContext = () => {
  const context = useContext(PetContext);

  return context;
};
