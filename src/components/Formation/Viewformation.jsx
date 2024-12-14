import React, { useState, useEffect } from 'react';
import { getFormationById } from '../../services/Formationservice';  // Importer le service pour récupérer une formation

const ViewFormation = ({ match }) => {
    const [formation, setFormation] = useState(null);
    const { id } = match.params;  // Récupérer l'id de la route

    useEffect(() => {
        const fetchFormation = async () => {
            try {
                const data = await getFormationById(id);
                setFormation(data);
            } catch (error) {
                console.error("Erreur lors de la récupération de la formation:", error);
            }
        };
        fetchFormation();
    }, [id]);

    if (!formation) return <div>Chargement...</div>;

    return (
        <div>
            <h1>Détails de la formation</h1>
            <h3>{formation.Titre}</h3>
            <p>{formation.Description}</p>
            <p><strong>Date de début:</strong> {formation.DateDebut}</p>
            <p><strong>Date de fin:</strong> {formation.DateFin}</p>
            <p><strong>Formateur:</strong> {formation.FormateurId}</p>
            <button onClick={() => window.location.href = `/edit/${formation.id}`}>Modifier</button>
            <button onClick={() => window.location.href = `/`}>Retour à la liste</button>
        </div>
    );
};

export default ViewFormation;
