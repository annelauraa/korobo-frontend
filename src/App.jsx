import { AuthProvider } from "./context/AuthContext";
import AppRouter from "./routes/Router";
import "react-loading-skeleton/dist/skeleton.css";

function App() {
  return (
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  );
}

export default App;
