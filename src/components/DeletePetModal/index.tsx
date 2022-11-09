import { StyledBaseModal } from "../../styles/baseModal"
import { GrClose } from "react-icons/gr"
import { StyledButton } from "../Button/style"
import { useModalContext } from "../../contexts/ModalContext"
import { StyledFormPet, StyledTitleAddPet } from "./style"
import { usePetContext } from "../../contexts/PetContext"

export const DeletePetModal = () => {
    const { toggleDeletePetModal, modalData } = useModalContext()
    
const { deletePet } = usePetContext()

    return (<StyledBaseModal>
        <StyledFormPet className="animate__zoomIn" 
        encType="multipart/form-data"

        >
        <StyledTitleAddPet>
          <h2>Deletar Pet</h2>
          <span>
            <GrClose onClick={() => toggleDeletePetModal()} />
          </span>
        </StyledTitleAddPet>
        <StyledButton  background="--color-salmon"
            color="--color-white"
            fontSize="1.3"
            height="51"
            width="100%"
            type="button"
            onClick={()=> deletePet(modalData)}
            >DELETAR</StyledButton></StyledFormPet>
    </StyledBaseModal>)
}