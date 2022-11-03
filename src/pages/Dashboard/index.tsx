import { StyledButton } from "../../components/Button/style"
import { Footer } from "../../components/Footer"
import { StyledHeader } from "../../styles/header"
import { StyledInput } from "../../styles/StyledInput"
import { StyledDashboard } from "./style"
import { BiSearch } from "react-icons/bi"

export const Dashboard = () => {
    return (
        <StyledDashboard>
            <StyledHeader>
                <div>Dropdown</div> {/* Isso é um placeholder para o menu de dropdown e não será estilizado por isso */}
                <StyledButton fontSize="1.2" color="--color-white" width="70px" height="40" background="--color-salmon">Sair</StyledButton>
            </StyledHeader>

            <form>
                <StyledInput placeholder="teste"/>
                <StyledButton fontSize="1.2" color="--color-white" width="50px" height="40" background="--color-salmon"><BiSearch/></StyledButton>
            </form>

            <Footer/>
        </StyledDashboard>
    )
}