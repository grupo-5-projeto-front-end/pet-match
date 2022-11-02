import { StyledButton } from "./components/Button/style";
import { MainRoutes } from "./routes";
// Toasts tem que ser chamados da seguinte forma: 
// import { toast } from "react-toastify";
// toast.error("Ops! Algo deu errado! Faça seu login novamente.", { theme: "dark" })
// toast.success("Conta criada com sucesso!", { theme: "dark" })

function App() {
  return (
    <>
      <StyledButton color={"--color-white"} width={"40%"} background={"--color-black"}fontSize={"1"} height={"90"} >teste</StyledButton>
      <MainRoutes />
    </>
  );
}

export default App;
