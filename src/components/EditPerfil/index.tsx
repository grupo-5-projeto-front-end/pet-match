import { StyledBaseModal } from "../../styles/baseModal";
import { StyledError } from "../../styles/styledError";
import { StyledBoxInput, StyledBoxContentCidade, StyledForm } from "./style";
import { TiitleAndCloseModal } from "../titleAndCloseModal";
import { StyledButton } from "../Button/style";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Schema } from "./schema";
import { StyledInput } from "../../styles/StyledInput";
import { useUserContext } from "../../contexts/UserContext";
import { iUseEdit } from "./interface";

export const EditPerfil = () => {
  const { user, handlePatchUser } = useUserContext();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iUseEdit>({
    resolver: yupResolver(Schema),
  });

  return (
    <StyledBaseModal>
      <StyledForm onSubmit={handleSubmit((data)=>handlePatchUser(data))}>
        
        <TiitleAndCloseModal text={"Editar Perfil"} />

        <StyledBoxInput>
          <label htmlFor="email">E-mail</label>

          <StyledInput
            defaultValue={user?.email}
            type="text"
            id="email"
            placeholder="Digite eu e-mail"
            {...register("email")}
          />
          <StyledError> {errors.email?.message} </StyledError>
        </StyledBoxInput>

        <StyledBoxInput>
          <label htmlFor="name">Nome</label>

          <StyledInput
            defaultValue={user?.name}
            id="name"
            type="text"
            placeholder="Digite sua nome"
            {...register("name")}
          />
          <StyledError>{errors.name?.message} </StyledError>
        </StyledBoxInput>

        <StyledBoxContentCidade>
          <div className="city">
            <label htmlFor="adress">Cidade</label>

            <StyledInput
              defaultValue={user?.adress}
              id="adress"
              type="text"
              placeholder="Digite a cidade"
              {...register("adress")}
            />
            <StyledError> {errors.adress?.message} </StyledError>
          </div>

          <div className="Stat">
            <label htmlFor="city">Estado</label>

            <select defaultValue={user?.city} id="city" {...register("city")}>
              <option value="none">Estado</option>
              <option value="SP">SP</option>
              <option value="SP">RJ</option>
              <option value="SP">RS</option>
            </select>
            <StyledError> {errors.city?.message} </StyledError>
          </div>
        </StyledBoxContentCidade>

        <StyledBoxInput>
          <label htmlFor="tel">Telefone</label>

          <StyledInput
            defaultValue={user?.tel}
            type="number"
            placeholder="Digite seu telefone "
            {...register("tel")}
          />
          <StyledError> {errors.tel?.message} </StyledError>
        </StyledBoxInput>

        <StyledBoxInput>
          <label htmlFor="avatar">Avatar</label>

          <StyledInput
            defaultValue={user?.avatar}
            id="avatar"
            type="text"
            placeholder="foto de perfil "
            {...register("avatar")}
          />
          <StyledError> {errors.avatar?.message} </StyledError>
        </StyledBoxInput>

        <div className="boxBtn">
          <StyledButton
            background="--color-salmon"
            color="--color-white"
            fontSize="1.5"
            height="51"
            width="103.5%"
          >
            Editar
          </StyledButton>
        </div>
      </StyledForm>
    </StyledBaseModal>
  );
};
