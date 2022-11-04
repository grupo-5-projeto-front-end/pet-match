import { MainRoutes } from "./routes";
import { UserProvider } from "./contexts/UserContext";
import { RegisterPetUser } from "./components/RegisterPetUser/intex";
import { useModalContext } from "./contexts/ModalContext";

function App() {

  const {modal,typeModal, openModal} = useModalContext()

  return (
    <>
      <UserProvider>
        <MainRoutes />
      </UserProvider>
    </>
  );
}

export default App;
