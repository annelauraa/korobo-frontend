import { createContext, useState, useEffect } from "react"; // Importation des hooks React
import { login, logout } from "../api/authService"; // Importation des services d'authentification

// Création du contexte d'authentification
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // État local pour stocker les informations de l'utilisateur connecté

  // Fonction pour gérer la connexion
  const handleLogin = async (credentials) => {
    try {
      const data = await login(credentials); // Appelle la fonction login du service
      setUser(data.user); // Stocke les données de l'utilisateur après une connexion réussie
    } catch (error) {
      console.error("Erreur lors de la connexion :", error.message); // Gère l'erreur si la connexion échoue
    }
  };

  // Fonction pour gérer la déconnexion
  const handleLogout = async () => {
    await logout(); // Appelle la fonction logout du service
    setUser(null); // Supprime l'utilisateur du contexte après la déconnexion
  };

  return (
    <AuthContext.Provider value={{ user, handleLogin, handleLogout }}>
      {children} {/* Fournit les valeurs aux composants enfants */}
    </AuthContext.Provider>
  );
};
