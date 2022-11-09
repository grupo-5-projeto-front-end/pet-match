import { useModalContext } from "../../contexts/ModalContext";
import { useNavigate } from "react-router-dom";
import { StyledHeader } from "../../styles/header"
import { StyledButton } from "../Button/style";
import { EditPerfil } from "../EditPerfil";
import { RegisterPetUser } from "../RegisterPetUser";
import UserMenu from "../UserMenu";

export const DashboardHeader = () => {
    const {isModal, isModalCreatPet} = useModalContext()

    const navigate = useNavigate()

    const userLogout = () => {
        window.localStorage.clear()
        navigate('/')
    }

    return (
        <StyledHeader>
            <UserMenu/>
            <StyledButton onClick={userLogout} className="logoutButton" fontSize="1.2" color="--color-white" width="70px" height="40" background="--color-salmon">Sair</StyledButton>
            {isModal &&(<EditPerfil/>)}
            {isModalCreatPet &&(<RegisterPetUser/>)}
        </StyledHeader>
    );
};