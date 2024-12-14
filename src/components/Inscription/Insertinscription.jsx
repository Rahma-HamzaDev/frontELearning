import React, { useState } from "react";
// import { insertInscription } from "../../../services/InscriptionService";

const InsertInscription = () => {
    const [userId, setUserId] = useState("");
    const [formationId, setFormationId] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const inscriptionData = {
            userId: parseInt(userId), // Convertir en entier
            formationId: parseInt(formationId), // Convertir en entier
        };

        try {
            const response = await insertInscription(inscriptionData);
            setMessage("Inscription réussie !");
            console.log("Réponse :", response.data);
        } catch (error) {
            setMessage("Échec de l'inscription.");
            console.error(error);
        }
    };

    return (
        <div>
            <h2>S'inscrire à une formation</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Identifiant utilisateur :</label>
                    <input
                        type="number"
                        value={userId}
                        onChange={(e) => setUserId(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Identifiant formation :</label>
                    <input
                        type="number"
                        value={formationId}
                        onChange={(e) => setFormationId(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">S'inscrire</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

export default InsertInscription;
