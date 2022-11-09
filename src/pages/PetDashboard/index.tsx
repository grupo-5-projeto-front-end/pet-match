import { Footer } from "../../components/Footer"
import { StyledInput } from "../../styles/StyledInput"
import { StyledPetDashboard, StyledLoadingDiv, StyledEditButton, StyledDeleteButton, StyledLinkWrapper } from "./style"
import { BiEdit, BiTrash } from "react-icons/bi"
import { StyledCarrousel } from "../../styles/carrousel"
import { usePetContext } from "../../contexts/PetContext"
import { useModalContext } from "../../contexts/ModalContext"
import { StyledPetCard } from "../../styles/petCard"
import { LoadingAnimation } from "../../components/LoadingAnimation"
import { DashboardHeader } from "../../components/DashboardHeader"
import { useEffect } from "react"
import { ManagePetUser } from "../../components/ManagePetModal" 
import { DeletePetModal } from "../../components/DeletePetModal"
import { StyledLinkRedirect } from "../../styles/styledLink"
export const PetDashboard = () => {
    const { userPets, loading, treatedSearch, setSearch, getAllPetsUser } = usePetContext();
    const { editPet, setModalData, toggleEditPetModal, toggleDeletePetModal, deletePet } = useModalContext()
    useEffect(() => {
        const id = Number(localStorage.getItem("@petmatch:userid"))
        getAllPetsUser(id)
      }, [getAllPetsUser])


      const handleEditButton = (petData: any) => {
        setModalData(petData)
        
        toggleEditPetModal()
      }

      const handleDeleteButton = (petId: number) => {
        setModalData(petId)

        toggleDeletePetModal()

      }
   
        return (
            <>
            { editPet && <ManagePetUser /> }
            { deletePet && <DeletePetModal /> }
            { loading ? (
            <StyledLoadingDiv>
                <LoadingAnimation/>
            </StyledLoadingDiv>
            ) : (
                <>
                <DashboardHeader/>
             <StyledLinkWrapper>
            <StyledLinkRedirect
            to="/dashboard"
            fontSize="1.2"
            color="--color-white"
            width="70px"
            height="50"
            background="--color-salmon"
            
          >
            Voltar
          </StyledLinkRedirect></StyledLinkWrapper>
                <StyledPetDashboard>
                    
                    <section>
                        <form>
                            <StyledInput placeholder="Pesquisar" onChange={event => setSearch(event.target.value)}/>
                        </form>
    
                            <StyledCarrousel>
                                {userPets?.filter(e => {
                                    if (treatedSearch === "") {
                                        return e
                                    } else if (e.name.toLowerCase().normalize("NFD").trim().replace(/[\u0300-\u036f]/g, "").includes(treatedSearch) || 
                                    e.bio.toLowerCase().normalize("NFD").trim().replace(/[\u0300-\u036f]/g, "").includes(treatedSearch) || 
                                    e.sex.toLowerCase().normalize("NFD").trim().replace(/[\u0300-\u036f]/g, "").includes(treatedSearch) || 
                                    e.category.toLowerCase().normalize("NFD").trim().replace(/[\u0300-\u036f]/g, "").includes(treatedSearch) || 
                                    e.breed.toLowerCase().normalize("NFD").trim().replace(/[\u0300-\u036f]/g, "").includes(treatedSearch)) {
                                        return e
                                    } 
                                    return null
                                })
                                .map(e => (
                                    <StyledPetCard key={e.id}>
                                        <StyledEditButton onClick={() => handleEditButton(e)}><BiEdit size={28}/></StyledEditButton>
                                        <StyledDeleteButton onClick={() => handleDeleteButton(e.id)}><BiTrash size={28}/></StyledDeleteButton>
                                        <figure>
                                            <img src={e.avatar} alt="Imagem do dog"/>
                                        </figure>
                                        <div>
                                            <h4>{e.name.length > 15 ? `${e.name.substring(0, 15)}...` : e.name}</h4>
                                            <p>{e.bio.length > 50 ? `${e.bio.substring(0, 50)}...` : e.bio}</p>
                                        </div>
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
                    
                </StyledPetDashboard>
 
                <Footer/>
                </>)};
    </>)
}