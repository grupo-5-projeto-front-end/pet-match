import { MainRoutes } from "./routes";
import { UserProvider } from "./contexts/UserContext";
import { PetProvider } from "./contexts/PetContext";


function App() {
  return (
    <>
      <UserProvider>
        <PetProvider>
          <MainRoutes />
        </PetProvider>
      </UserProvider>
    </>
  );
}

export default App;
