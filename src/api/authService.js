import api from "./axiosConfig"; // Importation de l'instance Axios configurée

// Fonction pour envoyer les informations de connexion à l'API
export const login = async (credentials) => {
    try {
        const response = await api.post("/auth/login", credentials); // Envoi d'une requête POST avec les identifiants
        return response.data; // Retourne les données reçues du serveur
    } catch (error) {
        console.error("Erreur de connexion :", error.response?.data || error.message); // Affichage de l'erreur en console
        throw error; // Lève une exception pour gérer l'erreur côté frontend
    }
};

// Fonction pour envoyer une requête de déconnexion
export const logout = async () => {
    try {
        await api.post("/auth/logout"); // Envoi d'une requête POST pour se déconnecter
    } catch (error) {
        console.error("Erreur de déconnexion :", error.response?.data || error.message); // Affichage de l'erreur
    }
};