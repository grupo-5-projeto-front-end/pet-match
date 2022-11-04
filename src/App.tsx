import { MainRoutes } from "./routes";
import { UserProvider } from "./contexts/UserContext";
import { PetProvider } from "./contexts/PetContext";
import { ModalProvider } from "./contexts/ModalContext";

function App() {
  return (
    <>
      <ModalProvider>
        <UserProvider>
          <PetProvider>
            <MainRoutes />
          </PetProvider>
        </UserProvider>
      </ModalProvider>
    </>
  );
}

export default App;
