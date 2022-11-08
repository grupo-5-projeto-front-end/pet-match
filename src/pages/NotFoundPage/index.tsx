import { StyledHeader } from "../../styles/header";
import PetMatchLogo from "../../assets/PETMATCH.png";
import sad_dog from "../../assets/sad_dog.webp"
import { StyledNotFoundPage } from "./style";
import { Footer } from "../../components/Footer";
import { StyledLinkRedirect } from "../../styles/styledLink";

export const NotFoundPage = () => {

  return (
    <>
      <StyledNotFoundPage>
        <StyledHeader>
          <img src={PetMatchLogo} alt="Logo PatchMatch" />
        </StyledHeader>
        <div>
        <main>
          <figure>
            <img src={sad_dog} alt="" />
          </figure>
          <h1>Página não encontrada, o número da cachorrinha não está aqui :(</h1>
          <StyledLinkRedirect
            to="/"
            fontSize="1.5"
            color="--color-white"
            width="150px"
            height="50"
            background="--color-salmon"
          >
            Voltar
          </StyledLinkRedirect>
        </main>
        </div>
      <Footer/>
      
      </StyledNotFoundPage>

    </>
  );
};
