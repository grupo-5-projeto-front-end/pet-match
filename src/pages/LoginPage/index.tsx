import { StyledHeader } from "../../styles/header";
import PetMatchLogo from "../../assets/PETMATCH.png";
import { StyledButton } from "../../components/Button/style";
import { StyledLoginPage } from "./style";
import { StyledFormBase } from "../../styles/styledFormBase";
import { StyledInput } from "../../styles/StyledInput";
import ImgPatinha from "../../assets/2.png";
import { StyledInputContainer } from "../../styles/inputContainer";
import { StyledError } from "../../styles/styledError";
import { loginFormSchema } from "./schema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { iLoginRegister } from "../../services/requests/login";
import { useUserContext } from "../../contexts/UserContext";
import { StyledLinkRedirect } from "../../styles/styledLink" ;

export const LoginPage = () => {
  const { onSubmitLogin } = useUserContext();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iLoginRegister>({
    resolver: yupResolver(loginFormSchema),
  });

  return (
    <StyledLoginPage>
      <StyledHeader>
        <div>
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
            Como esse processo funciona?
          </h2>
          <p>
            Aqui na PetMatch temos uma plataforma confiável para a escolha de um parceiro que seja perfeito para seu pet!
          </p>
          <p>
            Este website facilita o processo de encontrar o par ideal para seu animalzinho, de acordo com suas expectativas e 
            do conforto do seu lar. 

            Ao inserir suas credenciais e fazer o login, você será direcionado para nossa área do cliente, em que conseguirá visualizar os animais pertencentes à outras pessoas!
            Além de interagir com outros animais, você também poderá registrar seus próprios pets, para que eles sejam vistos por outros usuários e possam ser selecionados por eles!
            Quando encontrar o par ideal, poderá visualizar os dados de seu dono para conseguir entrar em contato e decidir como será a interação de ambos.
          </p>

          <h3>
            Preparado para alcançar seu objetivo de encontrar o par perfeito para seu pet?
          </h3>

          <img src={ImgPatinha} alt="Imagem de uma patinha de cachorro" />
        </div>
        <StyledFormBase onSubmit={handleSubmit(onSubmitLogin)}>
          <h2>Login</h2>
          <StyledInputContainer>
            <label htmlFor="EmailInput">Email</label>
            <StyledInput
              type="email"
              id="EmailInput"
              placeholder="Digite seu E-mail"
              {...register("email")}
            ></StyledInput>
            <StyledError>{errors.email?.message}</StyledError>
          </StyledInputContainer>
          <StyledInputContainer>
            <label htmlFor="PasswordInput">Senha</label>
            <StyledInput
              type="password"
              id="PasswordInput"
              placeholder="Digite sua senha"
              {...register("password")}
            ></StyledInput>
            <StyledError>{errors.password?.message}</StyledError>
          </StyledInputContainer>
          <StyledButton
            color="--color-white"
            fontSize="2"
            width="100%"
            height="70"
            background="--color-salmon"
          >
            Logar
          </StyledButton>
          <span className="spanForgetMyPass">Esqueci minha senha</span>
          <span className="whiteLine"></span>
          <span className="spanDontHaveAcccount">Ainda não possuí conta?</span>
          <StyledLinkRedirect
            to="/register"
            color="--color-white"
            fontSize="2"
            width="100%"
            height="70"
            background="--color-salmon"
          >
            Cadastre-se
          </StyledLinkRedirect>
        </StyledFormBase>
      </main>
    </StyledLoginPage>
  );
};
