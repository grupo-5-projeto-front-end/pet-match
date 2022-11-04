import { StyledButton } from "../../components/Button/style";
import { Footer } from "../../components/Footer";
import { StyledHeader } from "../../styles/header";
import { StyledInput } from "../../styles/StyledInput";
import { StyledDashboard } from "./style";
import { BiSearch } from "react-icons/bi";
import { StyledCarrousel } from "../../styles/carrousel";
import { usePetContext } from "../../contexts/PetContext";
import { StyledPetCard } from "../../styles/petCard";

export const Dashboard = () => {
  const { allPets } = usePetContext();

  return (
    <>
      <StyledHeader>
        <div>Dropdown</div>{" "}
        {/* Isso é um placeholder para o menu de dropdown e não será estilizado por isso */}

        <StyledButton
          fontSize="1.2"
          color="--color-white"
          width="70px"
          height="40"
          background="--color-salmon"
        >
          Sair
        </StyledButton>

      </StyledHeader>

      <StyledDashboard>
        <section>
          <form>
            <StyledInput placeholder="Pesquisar" />
            <StyledButton
              fontSize="1.2"
              color="--color-white"
              width="50px"
              height="40"
              background="--color-salmon"
            >
              <BiSearch />
            </StyledButton>
          </form>

          <StyledCarrousel>
            {allPets?.map((e) => (
              <StyledPetCard>
                <figure>
                  <img src={e.image[0]} alt="Imagem do dog" />
                </figure>
                <div>
                  <h4>
                    {e.name.length > 15
                      ? `${e.name.substring(0, 15)}...`
                      : e.name}
                  </h4>
                  <p>
                    {e.bio.length > 50 ? `${e.bio.substring(0, 50)}...` : e.bio}
                  </p>
                </div>
              </StyledPetCard>
            ))}
          </StyledCarrousel>
        </section>
        <section>
          <div>SUGESTÕES</div>
          {/* PLACEHOLDER DO LOCAL SUGERIDO DO COMPONENTE DE SUGESTÕES */}

          <div className="sponsor">
            <div className="sponsor__text">
              <h4>Patrocinado</h4>
              <h3>ONLY PETS</h3>
            </div>
            <div className="sponsor__divider"></div>
            <p>Parceiro oficial para adoção de amiguinhos</p>
          </div>
        </section>
      </StyledDashboard>

      <Footer />
    </>
  );
};
