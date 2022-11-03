import { MainRoutes } from "./routes";
import { UserProvider } from "./contexts/UserContext";
import { useModalContext } from "./contexts/ModalContext";
import { EditPerfil } from "./components/EditPerfil";

function App() {

  const {modal, openModal} = useModalContext()

  return (
    <>   
      <UserProvider>

      <button onClick={()=>openModal()}>chama modal</button>
    { 
    modal && ( <EditPerfil/>)
    }
        <MainRoutes />
      </UserProvider>
    </>
  );
}

export default App;
