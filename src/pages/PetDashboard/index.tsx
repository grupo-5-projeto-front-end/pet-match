import { StyledButton } from "../../components/Button/style"
import { Footer } from "../../components/Footer"
import { StyledHeader } from "../../styles/header"
import { StyledInput } from "../../styles/StyledInput"
import { StyledPetDashboard, StyledCarrousel } from "./style"
import { BiSearch } from "react-icons/bi"
import { StyledLinkRedirect } from "../../styles/styledLink"


export const PetDashboard = () => {
    return (
        <StyledPetDashboard>
            <StyledHeader>
                <div>Dropdown</div> {/* Isso é um placeholder para o menu de dropdown e não será estilizado por isso */}
                <StyledLinkRedirect
                to="/dashboard"
                fontSize="1.5"
                color="--color-white"
                width="150px"
                height="40"
                background="--color-salmon" 
                >
                    Voltar
                </StyledLinkRedirect>
            </StyledHeader>

          

            <section>
                <form>
                    <StyledInput placeholder="Pesquisar"/>
                    <StyledButton fontSize="1.2" color="--color-white" width="50px" height="40" background="--color-salmon"><BiSearch/></StyledButton>
                </form>
                <StyledCarrousel>
                        <li>
                        <div><img src="https://img.freepik.com/fotos-gratis/lindo-retrato-de-cachorro_23-2149218450.jpg?size=626&ext=jpg&ga=GA1.2.1955713432.1667510521" alt="" />
                            <h4>Nome do pet</h4>
                            </div>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        </li>
                        <li>
                            <div><img src="https://img.freepik.com/fotos-gratis/lindo-retrato-de-cachorro_23-2149218450.jpg?size=626&ext=jpg&ga=GA1.2.1955713432.1667510521" alt="" />
                            <h4>Nome do pet</h4>
                            </div>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        </li>
                        <li>
                            <div><img src="https://img.freepik.com/fotos-gratis/lindo-retrato-de-cachorro_23-2149218450.jpg?size=626&ext=jpg&ga=GA1.2.1955713432.1667510521" alt="" />
                            <h4>Nome do pet</h4>
                            </div>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        </li>
                        <li>
                        <div><img src="https://img.freepik.com/fotos-gratis/lindo-retrato-de-cachorro_23-2149218450.jpg?size=626&ext=jpg&ga=GA1.2.1955713432.1667510521" alt="" />
                            <h4>Nome do pet</h4>
                            </div>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        </li>
                    </StyledCarrousel>
                   
            </section>

                <div className="carrousel_suggestions">

                </div>

            <Footer/>
        </StyledPetDashboard>
    )
}