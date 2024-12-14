import { useEffect, useState } from "react";
import { getEvaluationsByFormation } from "../../services/EvaluationService";

const ViewEvaluationsByFormation = ({ formationId }) => {
    const [evaluations, setEvaluations] = useState([]);

    useEffect(() => {
        getEvaluationsByFormation(formationId)
            .then((res) => {
                setEvaluations(res.data);
            })
            .catch((err) => {
                console.error("Erreur lors de la récupération des évaluations:", err);
            });
    }, [formationId]);

    return (
        <div>
            <h2>Évaluations pour la formation</h2>
            {evaluations.length > 0 ? (
                evaluations.map((evaluation) => (
                    <div key={evaluation.id}>
                        <p>Note : {evaluation.note}/10</p>
                        <p>Commentaire : {evaluation.commentaire}</p>
                        <p>Date : {new Date(evaluation.dateEvaluation).toLocaleDateString()}</p>
                        <hr />
                    </div>
                ))
            ) : (
                <p>Aucune évaluation disponible.</p>
            )}
        </div>
    );
};

export default ViewEvaluationsByFormation;
