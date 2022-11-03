import { createContext, ReactNode, useContext } from "react";

interface iPetProps {
  children: ReactNode;
}

export const PetContext = createContext({});

export const PetProvider = ({ children }: iPetProps) => {
  return <PetContext.Provider value={{}}>{children}</PetContext.Provider>;
};

export const usePetContext = () => {
  const context = useContext(PetContext);

  return context;
};
