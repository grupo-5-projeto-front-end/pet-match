import { createContext, ReactNode, useContext, useState } from "react";

interface iChildren {
  children: ReactNode;
}

interface iModalProvider{
    modal: boolean;
    openModal: ()=>void;
    closeModal: ()=>void;
}


export const ModalContext = createContext<iModalProvider>({} as iModalProvider);
export const ModalProvider = ({ children }: iChildren) => {

  const [modal, isSetModal] = useState(false);

  const openModal = () => {
    isSetModal(!modal);
  };

  const closeModal = () => {
    isSetModal(!modal);
  };

  return( 
    <ModalContext.Provider value={{modal, openModal, closeModal}}>
        {children}
    </ModalContext.Provider>
  )
};

export const useModalContext = (): iModalProvider => {
    const context = useContext(ModalContext);
  
    return context;
  };
