import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createEvaluation } from "../../services/EvaluationService";

const CreateEvaluation = ({ formationId, userId }) => {
    const navigate = useNavigate();
    const [note, setNote] = useState(0);
    const [commentaire, setCommentaire] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const evaluationData = {
            userId: userId, // Remplacer par l'ID de l'utilisateur connecté
            formationId: formationId, // Remplacer par l'ID de la formation sélectionnée
            note: note,
            commentaire: commentaire,
            dateEvaluation: new Date(),
        };

        createEvaluation(evaluationData)
            .then((res) => {
                console.log("Évaluation ajoutée avec succès:", res.data);
                alert("Évaluation ajoutée avec succès !");
                navigate(`/formation/${formationId}`); // Rediriger vers la formation
            })
            .catch((err) => {
                console.error("Erreur lors de l'ajout de l'évaluation:", err);
                alert("Erreur lors de l'ajout de l'évaluation.");
            });
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Ajouter une évaluation</h2>
            <div>
                <label>Note (sur 10):</label>
                <input
                    type="number"
                    value={note}
                    onChange={(e) => setNote(Number(e.target.value))}
                    min="0"
                    max="10"
                    required
                />
            </div>
            <div>
                <label>Commentaire:</label>
                <textarea
                    value={commentaire}
                    onChange={(e) => setCommentaire(e.target.value)}
                    required
                ></textarea>
            </div>
            <button type="submit">Soumettre</button>
        </form>
    );
};

export default CreateEvaluation;
