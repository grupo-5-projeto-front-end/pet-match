import { GrClose } from "react-icons/gr";
import { useModalContext } from "../../contexts/ModalContext";
import { StyledBaseModal } from "../../styles/baseModal";
import { StyledInputContainer } from "../../styles/inputContainer";
import { StyledError } from "../../styles/styledError";
import { StyledInput } from "../../styles/StyledInput";
import {StyledFormPet, StyledSexAndCategory, StyledTitleAddPet } from "./style";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { StyledButton } from "../Button/style";
import { Schema } from "./schema";

export const RegisterPetUser = () => {
  const { closeModal } = useModalContext();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(Schema)
  });

  return (
    <StyledBaseModal>
      <StyledFormPet>

 
        <StyledTitleAddPet>
          <h2>Adicionar Pet</h2>
          <span>
            <GrClose onClick={()=>closeModal()}/>
          </span>
        </StyledTitleAddPet>
          
 
       

        <StyledInputContainer>
          <label htmlFor="name">Nome</label>

          <StyledInput id="name" type="text" placeholder="Digite nome do pet" {...register("name")} />
          {/* <StyledError>{errors.name?.message}  </StyledError>  */}
        </StyledInputContainer>

        <StyledInputContainer>
          <label htmlFor="breed">Nome do pet</label>

          <StyledInput id="breed" type="text" placeholder="Digite a raça"  {...register("breed")} />
          {/* <StyledError>{errors.raça?.message}  </StyledError> */}
        </StyledInputContainer>

        <StyledSexAndCategory>
        <div className="category">
            <label htmlFor="category">Categoria</label>
            <StyledInput
              id="category"
              type="text"
              placeholder="Digite a Categoria"
              {...register("category")}
            />
            {/* <StyledError> {errors.category?.message} </StyledError> */}
          </div>

          <div className="sex">
            <label htmlFor="sex">Sexo</label>

            <select id="sex" {...register("sex")}>
              <option value="none">sexo?</option>
              <option value="F">F</option>
              <option value="M">M</option>
            
            </select>
            {/* <StyledError> {errors.city?.message} </StyledError> */}
          </div>
        </StyledSexAndCategory>

       
        <StyledInputContainer>
          <label htmlFor="avatar">Foto perfil do pet</label>
          <StyledInput id="avatar" type="text" placeholder="InserirU url foto"  {...register("avatar")} />
          <StyledError>teste </StyledError>          
        </StyledInputContainer>

        <StyledInputContainer>
          <label htmlFor="bio">bio do pet</label>
          <StyledInput id="bio" type="text" placeholder="Fale sobre seu pet"  {...register("bio")} />
          <StyledError>teste </StyledError>          
        </StyledInputContainer>
        <div className="boxBtn">
          <StyledButton
            background="--color-salmon"
            color="--color-white"
            fontSize="1.3"
            height="51"
            width="93%"
          >
            Adicionar pet
          </StyledButton>
        </div>
      </StyledFormPet>
    </StyledBaseModal>
  );
};
