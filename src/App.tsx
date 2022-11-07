import { MainRoutes } from "./routes";
import { UserProvider } from "./contexts/UserContext";
import { PetProvider } from "./contexts/PetContext";
import { ModalProvider } from "./contexts/ModalContext";

export const  App = () => {
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

