import { createContext, ReactNode, useContext, useState } from "react";

interface iChildren {
  children: ReactNode;
}

interface iModalProvider{
    modal: boolean;
    typeModal:string;
    openModal: (open:string)=>void;
    closeModal: ()=>void;
}

export const ModalContext = createContext<iModalProvider>({} as iModalProvider);
export const ModalProvider = ({ children }: iChildren) => {

  const [modal, isSetModal] = useState(false);

  const [typeModal, setTypeModal] = useState("");

  const openModal = (open:string) => {
    setTypeModal("1")
    isSetModal(!modal);
  };

  const closeModal = () => {
    isSetModal(!modal);
  };

  return( 
    <ModalContext.Provider value={{modal, typeModal, openModal, closeModal}}>
        {children}
    </ModalContext.Provider>
  )
};

export const useModalContext = (): iModalProvider => {
    const context = useContext(ModalContext);
  
    return context;
  };
