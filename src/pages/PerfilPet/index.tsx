import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { DashboardHeader } from "../../components/DashboardHeader";
import { usePetContext } from "../../contexts/PetContext";
import { StyledDivPetPerfil, StyledMainPerfil } from "./style";

export const PerfilPet = () => {
  const { getPetById, currentPet, getAllPetsAndUser, userAndPets } = usePetContext();

  const { id } = useParams();

  const userAndPet = async () => {
    if(currentPet)
    await getAllPetsAndUser(currentPet.userId);
  };

  useEffect(() => {
    if (id) {
      getPetById(id);      
      userAndPet()
    }

  }, [currentPet?.userId]);
  console.log(userAndPets, "userPet");
  return (
    <>
      <DashboardHeader />

      <StyledMainPerfil>
        <StyledDivPetPerfil>
          <figure>
            <img src={currentPet?.avatar} alt={currentPet?.name} />
          </figure>

          <div className="Content_Box">
            <h2>{currentPet?.name}</h2>
            <p>Raça: {currentPet?.breed}</p>
            <p>Sexo:{currentPet?.sex}</p>
            <p>Idade:{currentPet?.age}</p>
          </div>
        </StyledDivPetPerfil>

        {/* profile user */}
        <StyledDivPetPerfil>
          <figure>
            <img src={userAndPets?.avatar? userAndPets.avatar:"https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG.png" } alt=  {userAndPets?.name}/>
          </figure>

          <div className="Content_Box">
            <h2>{userAndPets?.name}</h2>
            <p>Cidade: {userAndPets?.city}</p>
            <p>Contato:{userAndPets?.email}</p>
            <p>telefone:{userAndPets?.tel}</p>
          </div>
        </StyledDivPetPerfil>
      </StyledMainPerfil>
    </>
  );
};
