import { StyledButton } from "../../components/Button/style";
import { StyledHeader } from "../../styles/header";
import { StyledRegisterPage } from "./style";
import PetMatchLogo from "../../assets/PETMATCH.png";
import { StyledError } from "../../styles/styledError";
import { StyledFormBase } from "../../styles/styledFormBase";
import { StyledInputContainer } from "../../styles/inputContainer";
import { StyledInput } from "../../styles/StyledInput";
import ImgPatinha from "../../assets/2.png";
import { BrasilianStates } from "./BrazilianStates";
import { StyledSelect } from "../../styles/styledSelect";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { registerFormSchema as schema} from "./schema"
import { useUserContext } from "../../contexts/UserContext";
import { iBodyRegister } from "../../contexts/UserContext"
import { StyledLinkRedirect } from "../../styles/styledLink";

export const RegisterPage = () => {

  const {onSubmitRegister} = useUserContext()

  const { register, handleSubmit, formState: { errors },} = useForm<iBodyRegister>({
    resolver: yupResolver(schema),
  });
  
  return (
    <StyledRegisterPage>
      <StyledHeader>
        <div className="headerContainer">
          <img src={PetMatchLogo} alt="Logo PetMatch" />
          <StyledLinkRedirect
            to="/"
            fontSize="1.5"
            color="--color-white"
            width="150px"
            height="40"
            background="--color-salmon"
          >
            Início
          </StyledLinkRedirect>
        </div>
      </StyledHeader>
      <main>
        <div className="textContainer">
          <h2>
            Encontre o par ideal do seu pet!
          </h2>
          <p>
            Você está quase lá! Falta pouco para começar a conhecer candidatos!
          </p>
          <p>
            De forma similar a sites e aplicativos de encontro para humanos que facilitam o encontro de um parceiro de acordo com suas preferências, você apenas precisa
            cadastrar seus dados (e os dados de seu(s) pet(s)) e estará pronto para encontrar os candidatos ideais!
            Inserindo todas as informações necessárias, você será capaz de visualizar os animais pertencentes à outras pessoas e seus dados, permitindo-o
            contatar seus donos ou utilizar seus detalhes conforme for conveniente!
          </p>

          <img src={ImgPatinha} alt="Imagem de uma patinha de cachorro" />
        </div>
        <StyledFormBase onSubmit={handleSubmit(onSubmitRegister)}>
            <h2>Registro</h2>
          <StyledInputContainer>
            <label htmlFor="EmailInput">Email</label>
            <StyledInput
              id="EmailInput"
              placeholder="Digite seu E-mail"
              {...register("email")}
            ></StyledInput>
            <StyledError>{errors.email?.message}</StyledError>
          </StyledInputContainer>

          <StyledInputContainer>
            <label htmlFor="NameInput">Nome</label>
            <StyledInput
              id="NameInput"
              placeholder="Digite seu Nome"
              {...register("name")}
            ></StyledInput>
            <StyledError>{errors.name?.message}</StyledError>
          </StyledInputContainer>

          <StyledInputContainer>
            <label htmlFor="PassWordInput">Senha</label>
            <StyledInput
              type="password"
              id="PassWordInput"
              placeholder="Digite sua Senha"
              {...register("password")}
            ></StyledInput>
            <StyledError>{errors.password?.message}</StyledError>
          </StyledInputContainer>

          <div className="selectContainer">
            <div>
              <StyledInputContainer>
                <label htmlFor="CityInput">Cidade</label>
                <StyledInput
                  id="CityInput"
                  placeholder="Digite sua Cidade"
                  {...register("city")}
                ></StyledInput>
                <StyledError>{errors.city?.message}</StyledError>
              </StyledInputContainer>
            </div>
            <div className="containerStates">
              <StyledInputContainer>
                <label htmlFor="StateInput">Estado</label>
                <StyledSelect 
                  id="StateInput"
                  {...register("adress")}>
                  <BrasilianStates/>
                </StyledSelect>
              </StyledInputContainer>
            </div>
          </div>

          <StyledInputContainer>
            <label htmlFor="TelephoneInput">Telefone</label>
            <StyledInput
              id="TelephoneInput"
              placeholder="Digite seu telefone"
              {...register("tel")}
            ></StyledInput>
            <StyledError>{errors.tel?.message}</StyledError>
          </StyledInputContainer>

          <StyledInputContainer>
            <label htmlFor="AvatarInput">Avatar</label>
            <StyledInput
              id="AvatarInput"
              placeholder="Coloque sua foto"
              {...register("avatar")}
            ></StyledInput>
            <StyledError>{errors.avatar?.message}</StyledError>
          </StyledInputContainer>

          <StyledButton type="submit" color="--color-white" fontSize="2" width="100%" height="70" background="--color-salmon">
            Cadastrar
          </StyledButton> 
        </StyledFormBase>
      </main>
    </StyledRegisterPage>
  );
};
