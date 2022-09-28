import "./App.css";
import { useAuth } from "./contexts/auth";
import Authenticated from "./modes/Authenticated";
import Unauthenticated from "./modes/Unauthenticated";

function App() {
  const { isAuthenticated } = useAuth();

  return <div>{isAuthenticated ? <Authenticated /> : <Unauthenticated />}</div>;
}

export default App;
