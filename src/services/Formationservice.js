import axios from "../axios/Api";  // Importez votre instance axios configurée

const FORMATION_API = "Formation";

// Récupérer toutes les formations
export const getAllFormations = async () => {
    try {
        const response = await axios.get(FORMATION_API);
        return response.data;  // Retourne les formations récupérées
    } catch (error) {
        console.error("Erreur lors de la récupération des formations:", error);
        throw error; // Lancer l'erreur pour gérer l'échec dans le composant
    }
};

// Récupérer une formation par ID
export const getFormationById = async (id) => {
    try {
        const response = await axios.get(`${FORMATION_API}/${id}`);
        return response.data;  // Retourne la formation spécifique
    } catch (error) {
        console.error("Erreur lors de la récupération de la formation:", error);
        throw error;  // Lancer l'erreur pour gestion dans le composant
    }
};

// Créer une nouvelle formation
export const createFormation = async (formationData) => {
    try {
        const response = await axios.post(FORMATION_API, formationData);
        return response.data;  // Retourne la formation créée
    } catch (error) {
        console.error("Erreur lors de la création de la formation:", error);
        throw error;  // Lancer l'erreur pour gestion dans le composant
    }
};

// Mettre à jour une formation existante
export const updateFormation = async (id, formationData) => {
    try {
        const response = await axios.put(`${FORMATION_API}/${id}`, formationData);
        return response.data;  // Retourne la formation mise à jour
    } catch (error) {
        console.error("Erreur lors de la mise à jour de la formation:", error);
        throw error;  // Lancer l'erreur pour gestion dans le composant
    }
};

// Supprimer une formation
export const deleteFormation = async (id) => {
    try {
        await axios.delete(`${FORMATION_API}/${id}`);
        return id;  // Retourne l'ID de la formation supprimée
    } catch (error) {
        console.error("Erreur lors de la suppression de la formation:", error);
        throw error;  // Lancer l'erreur pour gestion dans le composant
    }
};
