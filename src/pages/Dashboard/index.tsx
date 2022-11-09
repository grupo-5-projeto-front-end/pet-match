import { Footer } from "../../components/Footer";
import { StyledInput } from "../../styles/StyledInput";
import { StyledDashboard, StyledLoadingDiv } from "./style";
import { StyledCarrousel } from "../../styles/carrousel";
import { usePetContext } from "../../contexts/PetContext";
import { StyledPetCard } from "../../styles/petCard";
import { LoadingAnimation } from "../../components/LoadingAnimation";
import { DashboardHeader } from "../../components/DashboardHeader";
import { Link } from "react-router-dom";

export const Dashboard = () => {
  const { allPets, loading, treatedSearch, setSearch } = usePetContext();

  if (loading) {
    return (
      <StyledLoadingDiv>
        <LoadingAnimation />
      </StyledLoadingDiv>
    );
  } else {
    return (
      <>
        <DashboardHeader />
        <StyledDashboard>
          <section>
            <form>
              <StyledInput
                placeholder="Pesquisar"
                onChange={(event) => setSearch(event.target.value)}
              />
            </form>

            <StyledCarrousel className="animate__fadeIn">
              {allPets
                ?.filter((e) => {
                  if (treatedSearch === "") {
                    return e;
                  } else if (
                    e.name
                      .toLowerCase()
                      .normalize("NFD")
                      .trim()
                      .replace(/[\u0300-\u036f]/g, "")
                      .includes(treatedSearch) ||
                    e.bio
                      .toLowerCase()
                      .normalize("NFD")
                      .trim()
                      .replace(/[\u0300-\u036f]/g, "")
                      .includes(treatedSearch) ||
                    e.sex
                      .toLowerCase()
                      .normalize("NFD")
                      .trim()
                      .replace(/[\u0300-\u036f]/g, "")
                      .includes(treatedSearch) ||
                    e.category
                      .toLowerCase()
                      .normalize("NFD")
                      .trim()
                      .replace(/[\u0300-\u036f]/g, "")
                      .includes(treatedSearch) ||
                    e.breed
                      .toLowerCase()
                      .normalize("NFD")
                      .trim()
                      .replace(/[\u0300-\u036f]/g, "")
                      .includes(treatedSearch)
                  ) {
                    return e;
                  }
                  return null;
                })
                .map((e) => (
                  <StyledPetCard key={e.id}>
                    <Link to={`/dashboard/pets/${e.id}`}>
                      <figure>
                        <img src={e.avatar} alt="Imagem do dog" />
                      </figure>
                      <div>
                        <h4>
                          {e.name.length > 15
                            ? `${e.name.substring(0, 15)}...`
                            : e.name}
                        </h4>
                        <p>
                          {e.bio}
                        </p>
                      </div>
                    </Link>
                  </StyledPetCard>
                ))}
            </StyledCarrousel>
          </section>
          <section>
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
  }
};
