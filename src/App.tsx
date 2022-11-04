import { MainRoutes } from "./routes";
import { UserProvider } from "./contexts/UserContext";
import { PetProvider } from "./contexts/PetContext";
import { ModalProvider } from "./contexts/ModalContext";


function App() {
  return (
    <>
      <UserProvider>
        <PetProvider>
          <ModalProvider>
            <MainRoutes />
          </ModalProvider>
        </PetProvider>
      </UserProvider>
    </>
  );
}

export default App;
