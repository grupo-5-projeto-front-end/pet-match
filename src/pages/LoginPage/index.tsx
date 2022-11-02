import { StyledHeader } from "../../components/Header/style";
import PetMatchLogo from "../../assets/PETMATCH.png";
import { StyledButton } from "../../components/Button/style";
import { StyledLoginPage } from "./style";
import { StyledFormBase } from "../../components/FormBase/style";
import { StyledInput } from "../../styles/StyledInput";
import ImgPatinha from "../../assets/patinha.png";

export const LoginPage = () => {
  return (
    <StyledLoginPage>
      <StyledHeader>
        <div>
          <img src={PetMatchLogo} alt="Logo PetMatch" />
          <StyledButton width="100" height="30" background="--color-salmon">
            Início
          </StyledButton>
        </div>
      </StyledHeader>
      <main>
        <div>
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
            <h2>Login</h2>
          <div className="inputBox">
            <label htmlFor="EmailInput">Email</label>
            <StyledInput
              id="EmailInput"
              placeholder="Digite seu E-mail"
            ></StyledInput>
            <span></span>
          </div>
          <div className="inputBox">
            <label htmlFor="PasswordInput">Senha</label>
            <StyledInput
              id="PasswordInput"
              placeholder="Digite sua senha"
            ></StyledInput>
            <span></span>
          </div>
          <StyledButton width="90%" height="48" background="--color-salmon">
            Logar
          </StyledButton>
          <span className="spanForgetMyPass">Esqueci minha senha</span>
          <span className="whiteLine"></span>
          <span className="spanDontHaveAcccount">Ainda não possuí conta?</span>
          <StyledButton width="" height="48" background="--color-salmon">
            Cadastre-se
          </StyledButton>
        </StyledFormBase>
      </main>
    </StyledLoginPage>
  );
};
