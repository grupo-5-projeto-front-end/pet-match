import { StyledButton } from "./components/Button/style";
import { MainRoutes } from "./routes";

function App() {
  return (
    <>
      <StyledButton color={"--color-white"} width={"40%"} background={"--color-black"}fontSize={"1"} height={"90"} >teste</StyledButton>
      <MainRoutes />
    </>
  );
}

export default App;
