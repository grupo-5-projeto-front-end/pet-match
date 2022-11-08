import { StyledHeader } from "../../styles/header";
import PetMatchLogo from "../../assets/PETMATCH.png";
import { StyledButton } from "../../components/Button/style";
import sad_dog from "../../assets/sad_dog.webp"
import { StyledNotFoundPage } from "./style";
import { Footer } from "../../components/Footer";
import { useNavigate } from "react-router-dom";

export const NotFoundPage = () => {

  const navigate = useNavigate()

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
          <StyledButton
            width="150px"
            background="--color-salmon"
            color="--color-white"
            fontSize="1.5"
            height="50"
            onClick={() => navigate(-1)}
          >
            Voltar
          </StyledButton>
        </main>
        </div>
      <Footer/>
      
      </StyledNotFoundPage>

    </>
  );
};
