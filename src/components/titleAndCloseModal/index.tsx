import { GrClose } from "react-icons/gr";
import { useModalContext } from "../../contexts/ModalContext";
import { StyledBoxContent } from "./style";

interface iText {
  text: string;
}
export const TiitleAndCloseModal = ({ text }: iText) => {

  const {closeModal} =useModalContext()  
  return (
    //refaturar depois para todos os modais 
    <StyledBoxContent className="titleAndCloseModal">
      <h2>{text}</h2>
     <span>
        <GrClose onClick={()=>closeModal()} />
     </span>
  
    </StyledBoxContent>
  );
};
