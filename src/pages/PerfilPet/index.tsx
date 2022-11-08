import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { StyledButton } from "../../components/Button/style";
import { DashboardHeader } from "../../components/DashboardHeader";
import { Footer } from "../../components/Footer";
import { SameUserPets } from "../../components/SameUserPets";
import { usePetContext } from "../../contexts/PetContext";
import { StyledDivPetPerfil, StyledMainPerfil ,StyledUserPets} from "./style";

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
        <div className="box_backOut" >
          <Link className="back_Dash"  to={"/dashboard"}>Voltar</Link>
          {/* <StyledButton background="--color-salmon" color="--color-gray" fontSize="1" height="50" width="100px">Voltar</StyledButton> */}
        </div>
      <StyledMainPerfil>
        <StyledDivPetPerfil >
          <figure>
            <img src={currentPet?.avatar} alt={currentPet?.name} />
          </figure>

          <div className="Content_Box">
            <h2>{currentPet?.name}</h2>
            <p>Raça: {currentPet?.breed}</p>
            <p>Sexo: {currentPet?.sex}</p>
            <p>Idade: {currentPet?.age}</p>
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
            <h2>{userAndPets?.name}</h2>
            <p>Cidade: {userAndPets?.city}</p>
            <p>Contato: {userAndPets?.email}</p>
            <p>telefone: {userAndPets?.tel}</p>
          </div>
        </StyledDivPetPerfil>
      </StyledMainPerfil>
        <SameUserPets pets={userAndPets?.pets} id={Number(id)} />
        <Footer/>
        </StyledUserPets>
    </>
  );
};
