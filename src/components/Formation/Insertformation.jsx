import React, { useState } from "react";

const InsertFormation = ({ onFormationAdded }) => {
    const [formation, setFormation] = useState({
        titre: "",
        description: "",
        duree: 0,
        dateDebut: "",
        formateur: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormation({ ...formation, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("/api/Formation", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formation),
            });
            if (response.ok) {
                alert("Formation ajoutée avec succès.");
                onFormationAdded();
            } else {
                alert("Échec de l'ajout de la formation.");
            }
        } catch (error) {
            console.error("Erreur :", error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>Titre:</label>
            <input name="titre" value={formation.titre} onChange={handleChange} />
            <label>Description:</label>
            <input
                name="description"
                value={formation.description}
                onChange={handleChange}
            />
            <label>Durée (heures):</label>
            <input name="duree" value={formation.duree} onChange={handleChange} />
            <label>Date de début:</label>
            <input
                type="date"
                name="dateDebut"
                value={formation.dateDebut}
                onChange={handleChange}
            />
            <label>Formateur:</label>
            <input
                name="formateur"
                value={formation.formateur}
                onChange={handleChange}
            />
            <button type="submit">Ajouter</button>
        </form>
    );
};

export default InsertFormation;
