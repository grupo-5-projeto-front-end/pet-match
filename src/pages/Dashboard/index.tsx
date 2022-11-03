import { StyledButton } from "../../components/Button/style"
import { Footer } from "../../components/Footer"
import { StyledHeader } from "../../styles/header"
import { StyledInput } from "../../styles/StyledInput"
import { StyledDashboard } from "./style"
import { BiSearch } from "react-icons/bi"
import { StyledCarrousel } from "../../styles/carrousel"

export const Dashboard = () => {
    return (
        <StyledDashboard>
            <StyledHeader>
                <div>Dropdown</div> {/* Isso é um placeholder para o menu de dropdown e não será estilizado por isso */}
                <StyledButton fontSize="1.2" color="--color-white" width="70px" height="40" background="--color-salmon">Sair</StyledButton>
            </StyledHeader>

            <section>
                <form>
                    <StyledInput placeholder="Pesquisar"/>
                    <StyledButton fontSize="1.2" color="--color-white" width="50px" height="40" background="--color-salmon"><BiSearch/></StyledButton>
                </form>

                    <StyledCarrousel>
                        <li>
                            {/* <img src="" alt="" />  Placeholder da imagem por enquanto*/}
                            <h4>Nome do pet</h4>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        </li>
                    </StyledCarrousel>
            </section>
                <div className="carrousel_suggestions">

                </div>

            <Footer/>
        </StyledDashboard>
    )
}