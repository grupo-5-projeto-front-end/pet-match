import { StyledUserPets } from "./style";
import { StyledPetCard } from "../../styles/petCard";
import { iPet } from "../../contexts/PetContext";

interface iUserPets {
  pets?: iPet[];
  id?: number;
}

export const SameUserPets = ({ pets, id }: iUserPets) => {
  const dogs = pets?.filter((dog) => dog.id !==id);

  console.log(dogs);
  return (
    <StyledUserPets>
      <h3>Outros pets do mesmo tutor</h3>
      <ul className="petList">
        {dogs?.map((dog) => (
          <>
            <StyledPetCard key={dog.id}>
              <figure>
                <img src={dog.avatar} alt="Imagem do dog" />
              </figure>

              <div>
                <h4>{dog.name}</h4>
                <p>{dog.bio}</p>
              </div>
            </StyledPetCard>
          </>
        ))}
      </ul>

      <div className="gradient"></div>
    </StyledUserPets>
  );
};

// {/* <StyledPetCard key={e.id}>
//     <figure>
//         <img src={e.avatar} alt="Imagem do dog"/>
//     </figure>
//     <div>
//         <h4>{e.name.length > 15 ? `${e.name.substring(0, 15)}...` : e.name}</h4>
//         <p>{e.bio.length > 50 ? `${e.bio.substring(0, 50)}...` : e.bio}</p>
//     </div>
// </StyledPetCard> */}
