import React, { useState, useEffect } from "react";
import { getInscriptionsByUser } from "../../services/InscriptionService";
 
const ViewInscription = () => {
    const [userId, setUserId] = useState("");
    const [inscriptions, setInscriptions] = useState([]);
    const [message, setMessage] = useState("");

    const handleFetchInscriptions = async () => {
        try {
            const response = await getInscriptionsByUser(userId);
            setInscriptions(response.data);
            setMessage("");
        } catch (error) {
            setMessage("Erreur lors de la récupération des inscriptions.");
            console.error(error);
        }
    };

    return (
        <div>
            <h2>Voir mes inscriptions</h2>
            <div>
                <label>Identifiant utilisateur :</label>
                <input
                    type="number"
                    value={userId}
                    onChange={(e) => setUserId(e.target.value)}
                    required
                />
                <button onClick={handleFetchInscriptions}>Afficher les inscriptions</button>
            </div>
            {message && <p>{message}</p>}
            <div>
                {inscriptions.length > 0 ? (
                    <table>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Formation</th>
                                <th>Date d'inscription</th>
                            </tr>
                        </thead>
                        <tbody>
                            {inscriptions.map((inscription, index) => (
                                <tr key={index}>
                                    <td>{inscription.id}</td>
                                    <td>{inscription.formation.titre}</td>
                                    <td>{new Date(inscription.dateInscription).toLocaleDateString()}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <p>Aucune inscription trouvée.</p>
                )}
            </div>
        </div>
    );
};

export default ViewInscription;
