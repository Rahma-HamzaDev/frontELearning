import { useEffect, useState } from "react";
import { getEvaluationsByUser } from "../../services/EvaluationService";

const ViewEvaluationsByUser = ({ userId }) => {
    const [evaluations, setEvaluations] = useState([]);

    useEffect(() => {
        getEvaluationsByUser(userId)
            .then((res) => {
                setEvaluations(res.data);
            })
            .catch((err) => {
                console.error("Erreur lors de la récupération des évaluations de l'utilisateur:", err);
            });
    }, [userId]);

    return (
        <div>
            <h2>Vos évaluations</h2>
            {evaluations.length > 0 ? (
                evaluations.map((evaluation) => (
                    <div key={evaluation.id}>
                        <p>Formation : {evaluation.formation?.titre}</p>
                        <p>Note : {evaluation.note}/10</p>
                        <p>Commentaire : {evaluation.commentaire}</p>
                        <p>Date : {new Date(evaluation.dateEvaluation).toLocaleDateString()}</p>
                        <hr />
                    </div>
                ))
            ) : (
                <p>Vous n'avez laissé aucune évaluation.</p>
            )}
        </div>
    );
};

export default ViewEvaluationsByUser;
