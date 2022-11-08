import { StyledUserPets } from "./style"
import { StyledPetCard } from "../../styles/petCard";

export const SameUserPets = () => {
    return (
        <StyledUserPets>
            <h3>Outros pets do mesmo tutor</h3>
            <div className="petList">
                <StyledPetCard>
                    <figure>
                        <img src="https://www.purina.co.uk/sites/default/files/2020-11/Working%20Dogs%20Everything%20You%20Need%20to%20KnowTEASER.jpeg" alt="Imagem do dog"/>
                    </figure>
                    <div>
                        <h4>Doguinho</h4>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus, nam?</p>
                    </div>
                </StyledPetCard>
                <StyledPetCard>
                    <figure>
                        <img src="https://www.purina.co.uk/sites/default/files/2020-11/Working%20Dogs%20Everything%20You%20Need%20to%20KnowTEASER.jpeg" alt="Imagem do dog"/>
                    </figure>
                    <div>
                        <h4>Doguinho</h4>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus, nam?</p>
                    </div>
                </StyledPetCard>
                <StyledPetCard>
                    <figure>
                        <img src="https://www.purina.co.uk/sites/default/files/2020-11/Working%20Dogs%20Everything%20You%20Need%20to%20KnowTEASER.jpeg" alt="Imagem do dog"/>
                    </figure>
                    <div>
                        <h4>Doguinho</h4>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus, nam?</p>
                    </div>
                </StyledPetCard>
                <StyledPetCard>
                    <figure>
                        <img src="https://www.purina.co.uk/sites/default/files/2020-11/Working%20Dogs%20Everything%20You%20Need%20to%20KnowTEASER.jpeg" alt="Imagem do dog"/>
                    </figure>
                    <div>
                        <h4>Doguinho</h4>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus, nam?</p>
                    </div>
                </StyledPetCard>
                <StyledPetCard>
                    <figure>
                        <img src="https://www.purina.co.uk/sites/default/files/2020-11/Working%20Dogs%20Everything%20You%20Need%20to%20KnowTEASER.jpeg" alt="Imagem do dog"/>
                    </figure>
                    <div>
                        <h4>Doguinho</h4>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus, nam?</p>
                    </div>
                </StyledPetCard>
                <StyledPetCard>
                    <figure>
                        <img src="https://www.purina.co.uk/sites/default/files/2020-11/Working%20Dogs%20Everything%20You%20Need%20to%20KnowTEASER.jpeg" alt="Imagem do dog"/>
                    </figure>
                    <div>
                        <h4>Doguinho</h4>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus, nam?</p>
                    </div>
                </StyledPetCard>
            </div>
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