import { StyledButton } from "../../components/Button/style";
import { StyledHeader } from "../../styles/header";
import { StyledRegisterPage } from "./style";
import PetMatchLogo from "../../assets/PETMATCH.png";
import { StyledError } from "../../styles/styledError";
import { StyledFormBase } from "../../styles/styledFormBase";
import { StyledInputContainer } from "../../styles/inputContainer";
import { StyledInput } from "../../styles/StyledInput";
import ImgPatinha from "../../assets/patinha.png";
import { BrasilianStates } from "./BrazilianStates";
import { useNavigate } from "react-router-dom";

export const RegisterPage = () => {

  const navigate = useNavigate()
  return (
    <StyledRegisterPage>
      <StyledHeader>
        <div className="headerContainer">
          <img src={PetMatchLogo} alt="Logo PetMatch" />
          <StyledButton
            fontSize="1.5"
            color="--color-white"
            width="150px"
            height="40"
            background="--color-salmon"
            onClick={() => {navigate("/")}}
          >
            Início
          </StyledButton>
        </div>
      </StyledHeader>
      <main>
        <div className="textContainer">
          <h2>
            Texto de chamada falando sobre oe benefícios de se cadastrar aqui
          </h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
          <h3>Bora encontrar o número daquela cadelinha?</h3>
          <img src={ImgPatinha} alt="Imagem de uma patinha de cachorro" />
        </div>
        <StyledFormBase>
            <h2>Registro</h2>
          <StyledInputContainer>
            <label htmlFor="EmailInput">Email</label>
            <StyledInput
              id="EmailInput"
              placeholder="Digite seu E-mail"
            ></StyledInput>
            <StyledError></StyledError>
          </StyledInputContainer>

          <StyledInputContainer>
            <label htmlFor="NameInput">Nome</label>
            <StyledInput
              id="NameInput"
              placeholder="Digite sea Nome"
            ></StyledInput>
            <StyledError></StyledError>
          </StyledInputContainer>

          <StyledInputContainer>
            <label htmlFor="PassWordInput">Senha</label>
            <StyledInput
              id="PassWordInput"
              placeholder="Digite sua Senha"
            ></StyledInput>
            <StyledError></StyledError>
          </StyledInputContainer>

          <div className="selectContainer">
            <div>
              <StyledInputContainer>
                <label htmlFor="CityInput">Cidade</label>
                <StyledInput
                  id="CityInput"
                  placeholder="Digite sua Cidade"
                ></StyledInput>
                <StyledError></StyledError>
              </StyledInputContainer>
            </div>
            <div>
              <StyledInputContainer>
                <label htmlFor="StateInput">Estado</label>
                <select id="StateInput">
                  <BrasilianStates/>
                </select>
              </StyledInputContainer>
            </div>
          </div>

          <StyledInputContainer>
            <label htmlFor="TelephoneInput">Telefone</label>
            <StyledInput
              id="TelephoneInput"
              placeholder="Digite seu telefone"
            ></StyledInput>
            <StyledError></StyledError>
          </StyledInputContainer>

          <StyledInputContainer>
            <label htmlFor="AvatarInput">Avatar</label>
            <StyledInput
              id="AvatarInput"
              placeholder="Coloque sua foto"
            ></StyledInput>
            <StyledError></StyledError>
          </StyledInputContainer>

          <StyledButton type="submit" color="--color-white" fontSize="2" width="100%" height="70" background="--color-salmon">
            Cadastrar
          </StyledButton> 
        </StyledFormBase>
      </main>
    </StyledRegisterPage>
  );
};
