import { GrClose } from "react-icons/gr";
import { useModalContext } from "../../contexts/ModalContext";
import { StyledBaseModal } from "../../styles/baseModal";
import { StyledInputContainer } from "../../styles/inputContainer";
import { StyledError } from "../../styles/styledError";
import { StyledInput } from "../../styles/StyledInput";
import {
  StyledFormPet,
  StyledSexAndCategory,
  StyledTitleAddPet,
} from "./style";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { StyledButton } from "../Button/style";
import { Schema } from "./schema";
import { CategoryPet } from "./categoryPet";
import { usePetContext } from "../../contexts/PetContext";
import { iBodyPatchPet } from "../../services/requests/patchPet";

export const ManagePetUser = () => {
  const { toggleEditPetModal, modalData } = useModalContext();
  const { handlePatchPet } = usePetContext();
  const id = modalData.id as number;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iBodyPatchPet>({
    resolver: yupResolver(Schema),
    defaultValues:{
      name: modalData?.name || "",
      sex: modalData?.sex || "",
  category: modalData?.category || "",
  breed: modalData?.breed || "",
  age: modalData?.age || "",
  bio: modalData?.bio || "",
  image: modalData?.image || "",
  //visible: modalData?.visible || false,
     }
  });

  

  return (
    <StyledBaseModal>
      <StyledFormPet className="animate__zoomIn" 
        encType="multipart/form-data"
        onSubmit={handleSubmit((data)=> handlePatchPet(id, data))}
      >
        <StyledTitleAddPet>
          <h2>Editar Pet</h2>
          <span>
            <GrClose onClick={() => toggleEditPetModal()} />
          </span>
        </StyledTitleAddPet>

        <StyledInputContainer>
          <label htmlFor="name">Nome</label>
          
          <StyledInput
            id="name"
            type="text"
            placeholder="Digite nome do pet"
            {...register("name")}
          />
          <StyledError>{errors.name?.message} </StyledError>
        </StyledInputContainer>

        <StyledInputContainer>
          <label htmlFor="age">Idade</label>
          <StyledInput
            id="age"
            type="number"
            placeholder="Digite idade pet"
            {...register("age")}
          />
          <StyledError>{errors.age?.message} </StyledError>
        </StyledInputContainer>

        <StyledInputContainer>
          <label htmlFor="breed">Raça</label>

          <StyledInput
            id="breed"
            type="text"
            placeholder="Digite a raça"
            {...register("breed")}
          />
          <StyledError>{errors.breed?.message} </StyledError>
        </StyledInputContainer>

        <StyledSexAndCategory>
          <div className="category">
            <label htmlFor="category">Categoria</label>
            <select id="category" {...register("category")}>
              <CategoryPet />
            </select>

            <StyledError> {errors.category?.message} </StyledError>
          </div>

          <div className="sex">
            <label htmlFor="sex">Sexo</label>

            <select id="sex" {...register("sex")}>
              <option value="none">sexo?</option>
              <option value="F">F</option>
              <option value="M">M</option>
            </select>
            <StyledError> {errors.sex?.message} </StyledError>
          </div>
        </StyledSexAndCategory>

        <StyledInputContainer>
          <label htmlFor="avatar">Foto perfil pet</label>
          <StyledInput
            id="avatar"
            type="text"
            accept="image/*"
            placeholder="ex: https://cf.shopee.com.br/..."
            {...register("avatar")}
          />
          <StyledError> {errors.avatar?.message} </StyledError>
        </StyledInputContainer>
        {/* //pensando numa solução 
        <StyledInputContainer>
          <label  htmlFor="image">Fotos do pet</label>
          <StyledInput id="image" type="file" accept="image/*"  multiple placeholder="Inserir url/foto"  {...register("image")} />
          <StyledError> {errors.image?.message} </StyledError>          
        </StyledInputContainer> */}

        <StyledInputContainer>
          <label htmlFor="bio">bio do pet</label>
          <StyledInput
            id="bio"
            type="text"
            placeholder="Fale sobre seu pet"
            {...register("bio")}
          />
          <StyledError> {errors.bio?.message} </StyledError>
        </StyledInputContainer>
        <div className="boxBtn">
          <StyledButton
            background="--color-salmon"
            color="--color-white"
            fontSize="1.3"
            height="51"
            width="93%"
          >
            Editar pet
          </StyledButton>
        </div>
      </StyledFormPet>
    </StyledBaseModal>
  );
};
