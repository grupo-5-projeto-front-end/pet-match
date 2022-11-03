import { MainRoutes } from "./routes";
import { UserProvider } from "./contexts/UserContext";

function App() {
  return (
    <>
      <UserProvider>
        <MainRoutes />
      </UserProvider>
    </>
  );
}

export default App;
