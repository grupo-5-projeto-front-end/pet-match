import { StyledButton } from "../../components/Button/style";
import { StyledHeader } from "../../styles/header";
import PetMatchLogo from "../../assets/PETMATCH.png";
import firstimage from "../../assets/cachorrolandingpage.png";
import secondimage from "../../assets/gatinhosfilhotes.png";
import { StyledLandingPage } from "./style";
import { Footer } from "../../components/Footer";

export const LandingPage = () => {
  return (
    <StyledLandingPage>
      <StyledHeader>
        <div>
          <img src={PetMatchLogo} alt="Logo PetMatch" />
          <StyledButton
            fontSize="1.5"
            color="--color-white"
            width="150px"
            height="40"
            background="--color-salmon"
          >
            Entrar
          </StyledButton>
        </div>
      </StyledHeader>
      <div>
        <h1>Encontre o par perfeito para seu pet!</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum,
          molestias laboriosam tenetur harum incidunt iure nesciunt at impedit
          placeat temporibus optio soluta facilis laudantium quis repellendus,
          exercitationem molestiae officiis sunt.
        </p>
        <img src={firstimage} alt="Cachorro recebendo carinho" />
        <h2>Bora encontrar o número daquela cachorrinha?</h2>
      </div>

      <div id="black">
        <h3>Confira alguns dos nossos matches (e seus filhotinhos!)</h3>
        <img src={secondimage} alt="Gatinhos filhotes" />
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi
          mollitia minima molestias dicta.
        </p>
        {/*
         {Carrossel futuramente} 
         {Nome do pet}
         {Raça}
         */}
      </div>

      <div>
        <h2>Ainda não possui conta?</h2>
        <StyledButton
          fontSize="1.5"
          color="--color-white"
          width="150px"
          height="40"
          background="--color-salmon"
        >
          Cadastre-se
        </StyledButton>
      </div>

      <Footer />
    </StyledLandingPage>
  );
};
