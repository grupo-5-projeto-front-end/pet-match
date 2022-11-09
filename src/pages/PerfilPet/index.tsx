import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { DashboardHeader } from "../../components/DashboardHeader";
import { Footer } from "../../components/Footer";
import { SameUserPets } from "../../components/SameUserPets";
import { usePetContext } from "../../contexts/PetContext";
import { StyledDivPetPerfil, StyledMainPerfil, StyledUserPets } from "./style";

export const PerfilPet = () => {
  const { getPetById, currentPet, getAllPetsAndUser, userAndPets } =
    usePetContext();

  const { id } = useParams();

  const userAndPet = async () => {
    if (currentPet) await getAllPetsAndUser(currentPet.userId);
  };

  useEffect(() => {
    if (id) {
      getPetById(id);
      userAndPet();
    }
  }, [currentPet?.userId]);
  return (
    <>
      <StyledUserPets>
        <DashboardHeader />
        <div className="box_backOut">
          <Link className="back_Dash" to={"/dashboard"} >
            Voltar
          </Link>
        </div>
        <StyledMainPerfil>
          <StyledDivPetPerfil>
            <figure>
              <img src={currentPet?.avatar} alt={currentPet?.name} />
            </figure>

            <div className="Content_Box">
              <div>
                <h2>{currentPet?.name}</h2>
                <p><strong>Raça</strong>: {currentPet?.breed}</p>
                <p><strong>Sexo</strong>: {currentPet?.sex}</p>
                <p><strong>Idade</strong>: {currentPet?.age}</p>
              </div>

              <div className="bio">
                <p><strong>Bio</strong>: {currentPet?.bio}</p>
              </div>
            </div>
          </StyledDivPetPerfil>

          <StyledDivPetPerfil>
            <figure>
              <img
                src={
                  userAndPets?.avatar
                    ? userAndPets.avatar
                    : "https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG.png"
                }
                alt={userAndPets?.name}
              />
            </figure>

            <div className="Content_Box">
              <div>
                <h2>{userAndPets?.name}</h2>
                <p><strong>Cidade</strong>: {userAndPets?.city}</p>
                <p><strong>Contato</strong>:{userAndPets?.email}</p>
                <p><strong>Telefone</strong>: {userAndPets?.tel}</p>
              </div>
            </div>
          </StyledDivPetPerfil>
        </StyledMainPerfil>
        <SameUserPets pets={userAndPets?.pets} id={Number(id)} />
        <Footer />
      </StyledUserPets>
    </>
  );
};
