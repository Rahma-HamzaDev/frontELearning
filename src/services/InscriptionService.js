import axios from "../axios/Api";

 
const INSCRIPTION_API = "api/Inscription";

// Inscrire un utilisateur à une formation
export const insertInscription = async (inscriptionData) => {
    return await axios.post(`${INSCRIPTION_API}`, inscriptionData);
};

// Récupérer les inscriptions par utilisateur
export const getInscriptionsByUser = async (userId) => {
    return await axios.get(`${INSCRIPTION_API}/user/${userId}`);
};
