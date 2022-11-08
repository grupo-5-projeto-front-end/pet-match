import { createContext, ReactNode, useContext, useState } from "react";

interface iChildren {
  children: ReactNode;
}

interface iModalProvider {
  isModal: boolean;
  isModalCreatPet:boolean;
  openModal: () => void;
  closeModal: () => void;
  openCreatPet: () => void;
  closeCreatPet: () => void;
  modalData : any;
  setModalData: (data: any) => void;
  editPet: boolean;
  toggleEditPetModal: () => void;
}

export const ModalContext = createContext<iModalProvider>({} as iModalProvider);
export const ModalProvider = ({ children }: iChildren) => {
  const [isModal, isSetModal] = useState(false);
  const [isModalCreatPet , SetModalCreatPet ] = useState(false);
  const [modalData, setModalData] = useState()
  const [ editPet, setEditPet] = useState(false)

const toggleEditPetModal = () => {
  setEditPet((prevState) => !prevState)
}


  const openModal = () => {
    isSetModal(!isModal);
  };

  const closeModal = () => {
    isSetModal(!isModal);
  };

  const openCreatPet = () => {
    SetModalCreatPet(!isModalCreatPet);
  };

  const closeCreatPet = () => {
    SetModalCreatPet(!isModalCreatPet);
  };

  return (
    <ModalContext.Provider value={{ isModal , openModal, closeModal, isModalCreatPet, openCreatPet, closeCreatPet, modalData, setModalData, editPet, toggleEditPetModal }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModalContext = (): iModalProvider => {
  const context = useContext(ModalContext);

  return context;
};
