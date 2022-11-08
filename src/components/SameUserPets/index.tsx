import { Link } from "react-router-dom";
import { iPet, usePetContext } from "../../contexts/PetContext";
import { StyledCarrousel } from "../../styles/carrousel";
import { StyledPetCard } from "../../styles/petCard";
import { StyledDivPets } from "./style";

interface iUserPets {
  pets?: iPet[];
  id?: number;
}

export const SameUserPets = ({ pets, id }: iUserPets) => {
  const dogs = pets?.filter((dog) => dog.id !== id);

  const { getPetById } = usePetContext();
  return (
    <StyledDivPets>
      <h3>Outros pets do mesmo tutor</h3>

      <StyledCarrousel className="more_pets">
        {dogs?.length ? (
          dogs?.map((dog) => (
            <StyledPetCard key={dog.id}>
              <Link
                to={`/dashboard/pets/${dog.id}`}
                onClick={() => getPetById(dog.id)}
              >
                <figure>
                  <img src={dog.avatar} alt="Imagem do dog" />
                </figure>
                <div>
                  <h4>
                    {dog.name.length > 15
                      ? `${dog.name.substring(0, 15)}...`
                      : dog.name}
                  </h4>
                  <p>
                    {dog.bio.length > 50
                      ? `${dog.bio.substring(0, 50)}...`
                      : dog.bio}
                  </p>
                </div>
              </Link>
            </StyledPetCard>
          ))
        ) : (
          <h2>Nao a outros Pets cadatrados </h2>
        )}
      </StyledCarrousel>
    </StyledDivPets>
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
