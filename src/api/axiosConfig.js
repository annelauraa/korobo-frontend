import axios from "axios"; // Importation de la bibliothèque axios pour effectuer des requêtes HTTP

// Création d'une instance Axios avec des configurations prédéfinies
const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL || "localhost:5000/api", // URL de base de l'API backend
    headers: {
        "Content-Type": "application/json", // Définition du type de contenu JSON pour toutes les requêtes
    },
    withCredentials: true, // Autorisation d'envoyer les cookies (utile pour l'authentification)
});

export default api;