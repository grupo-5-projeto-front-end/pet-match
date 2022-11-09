import { StyledHeader } from "../../styles/header";
import PetMatchLogo from "../../assets/PETMATCH.png";
import firstimage from "../../assets/cachorrolandingpage.png";
import secondimage from "../../assets/gatinhosfilhotes.png";
import { StyledLandingPage } from "./style";
import { Footer } from "../../components/Footer";
import { usePetContext } from "../../contexts/PetContext";
import { StyledLinkRedirect } from "../../styles/styledLink";

export const LandingPage = () => {
  const { allPets } = usePetContext();

  return (
    <StyledLandingPage>
      <StyledHeader>
        <div>
          <img src={PetMatchLogo} alt="Logo PetMatch" />
          <StyledLinkRedirect
            to="/login"
            fontSize="1.5"
            color="--color-white"
            width="150px"
            height="40"
            background="--color-salmon"
          >
            Entrar
          </StyledLinkRedirect>
        </div>
      </StyledHeader>
      <div>
        <div>
          <h1>Encontre o par perfeito para seu pet!</h1>
          <p>
            Aqui na PetMatch, nós nos dedicamos à proporcionar qualidade de vida e bons relacionamento para os seus pets, 
            ofecerendo uma platorma intuitiva e acessível que permite que você interaja com outros donos de pet com objetivos iguais aos seus
            e encontre o par ideal para seu animalzinho!
          </p>
          <p>
            Você apenas precisa criar seu perfil com os detalhes necessários e começar a buscar!
          </p>
          <h2>Bora encontrar o número daquela cachorrinha?</h2>
        </div>
        <img src={firstimage} alt="Cachorro recebendo carinho" />
      </div>

      <div id="black">
        <div>
          <h3>Confira alguns dos nossos matches (e seus filhotinhos)!</h3>
          <img src={secondimage} alt="Gatinhos filhotes" />
          <p>
            Muitas histórias de sucesso começaram no PetMatch, desde donos buscando filhotes à empresas divulgando seus animais!
          </p>
        </div>
        <ul>
          {allPets?.map((pet) => {
            return (
              <li key={pet.id}>
                <img src={pet.avatar} alt={`Foto do pet ${pet.name}.`} />
              </li>
            );
          })}
        </ul>
      </div>

      <div>
        <h2>Ainda não possui conta?</h2>
        <StyledLinkRedirect
          to="/register"
          fontSize="1.5"
          color="--color-white"
          width="180px"
          height="40"
          background="--color-salmon"
        >
          Cadastre-se
        </StyledLinkRedirect>
      </div>

      <Footer />
    </StyledLandingPage>
  );
};
