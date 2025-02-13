import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import OfficialPage from "../pages/OfficialPage";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Dashboard from "../pages/AdminDashboard";
import PrivateRoute from "./PrivateRoute";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<OfficialPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
};

export default AppRouter;
