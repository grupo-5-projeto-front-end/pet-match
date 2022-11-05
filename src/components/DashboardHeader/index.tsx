import { StyledHeader } from "../../styles/header"
import { StyledButton } from "../Button/style";
import UserMenu from "../UserMenu";

const DashboardHeader = () => {
    return (
        <StyledHeader>
            <UserMenu/>
            <StyledButton className="logoutButton" fontSize="1.2" color="--color-white" width="70px" height="40" background="--color-salmon">Sair</StyledButton>
        </StyledHeader>
    );
};

export default DashboardHeader