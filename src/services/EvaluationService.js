import axios from "../axios/Api";

const EVALUATION_API = "Evaluation";

// Ajouter une évaluation
export const createEvaluation = async (evaluation) => {
    return await axios.post(EVALUATION_API, evaluation);
};

// Récupérer les évaluations d'une formation
export const getEvaluationsByFormation = async (formationId) => {
    return await axios.get(`${EVALUATION_API}/formation/${formationId}`);
};

// Récupérer les évaluations d'un utilisateur
export const getEvaluationsByUser = async (userId) => {
    return await axios.get(`${EVALUATION_API}/user/${userId}`);
};
