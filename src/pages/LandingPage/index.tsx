import { StyledButton } from "../../components/Button/style";
import { StyledHeader } from "../../styles/header";
import PetMatchLogo from "../../assets/PETMATCH.png";
import firstimage from "../../assets/cachorrolandingpage.png";
import secondimage from "../../assets/gatinhosfilhotes.png";
import { StyledLandingPage } from "./style";
import { Footer } from "../../components/Footer";
import { usePetContext } from "../../contexts/PetContext";

export const LandingPage = () => {
  const { allPets } = usePetContext();

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
        <div>
          <h1>Encontre o par perfeito para seu pet!</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum,
            molestias laboriosam tenetur harum incidunt iure nesciunt at impedit
            placeat temporibus optio soluta facilis laudantium quis repellendus,
            exercitationem molestiae officiis sunt.
          </p>
          <h2>Bora encontrar o número daquela cachorrinha?</h2>
        </div>
        <img src={firstimage} alt="Cachorro recebendo carinho" />
      </div>

      <div id="black">
        <div>
          <h3>Confira alguns dos nossos matches (e seus filhotinhos!)</h3>
          <img src={secondimage} alt="Gatinhos filhotes" />
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi
            mollitia minima molestias dicta.
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
