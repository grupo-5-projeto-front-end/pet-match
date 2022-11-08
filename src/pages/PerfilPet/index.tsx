import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { DashboardHeader } from "../../components/DashboardHeader";
import { usePetContext } from "../../contexts/PetContext";
import { StyledDivPetPerfil, StyledMainPerfil } from "./style";

export const PerfilPet = () => {
  const { getPetById, currentPet, getAllPetsUser, userPets } = usePetContext();

  const { id } = useParams();
  const useriDteste = async () => {
    if(currentPet)
    await getAllPetsUser(2);
  };
  console.log(userPets);


  useEffect(() => {
  
    if (id) {
      getPetById(id);
    }
  useriDteste()

  }, []);
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

        <StyledDivPetPerfil>
          <figure>
            <img src={currentPet?.avatar} alt="Imagem do dog" />
          </figure>

          <div className="Content_Box">
            <h2>{currentPet?.name}</h2>
            <p>Raça: {currentPet?.breed}</p>
            <p>Sexo:{currentPet?.sex}</p>
            <p>Idade:{currentPet?.age}</p>
          </div>
        </StyledDivPetPerfil>
      </StyledMainPerfil>
    </>
  );
};
