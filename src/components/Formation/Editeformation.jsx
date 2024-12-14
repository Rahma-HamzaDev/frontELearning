import React, { useState, useEffect } from 'react';
import { getFormationById, updateFormation } from '../../services/Formationservice';  // Importer le service pour mettre à jour une formation

const EditFormation = ({ match }) => {
    const [formation, setFormation] = useState({
        Titre: '',
        Description: '',
        DateDebut: '',
        DateFin: '',
        FormateurId: 1,  // Exemple de valeur par défaut
    });

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

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await updateFormation(id, formation);
            alert("Formation mise à jour avec succès!");
            window.location.href = `/view/${id}`;  // Rediriger vers la page de visualisation après la mise à jour
        } catch (error) {
            console.error("Erreur lors de la mise à jour de la formation:", error);
        }
    };

    return (
        <div>
            <h1>Modifier la Formation</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={formation.Titre}
                    onChange={(e) => setFormation({ ...formation, Titre: e.target.value })}
                    placeholder="Titre"
                    required
                />
                <textarea
                    value={formation.Description}
                    onChange={(e) => setFormation({ ...formation, Description: e.target.value })}
                    placeholder="Description"
                    required
                />
                <input
                    type="date"
                    value={formation.DateDebut}
                    onChange={(e) => setFormation({ ...formation, DateDebut: e.target.value })}
                    required
                />
                <input
                    type="date"
                    value={formation.DateFin}
                    onChange={(e) => setFormation({ ...formation, DateFin: e.target.value })}
                    required
                />
                <button type="submit">Mettre à jour la formation</button>
            </form>
            <button onClick={() => window.location.href = `/view/${id}`}>Annuler</button>
        </div>
    );
};

export default EditFormation;
