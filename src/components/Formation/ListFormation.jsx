import React, { useState, useEffect } from 'react';
import { getAllFormations, deleteFormation } from '../../services/Formationservice';  // Assurez-vous que les fonctions sont bien importées
import { Card, CardContent, CardActions, Button, Typography, Grid, Box } from '@mui/material'; // Importation des composants MUI

const ListFormation = () => {
    const [formations, setFormations] = useState([]);

    // Récupération des formations depuis l'API
    useEffect(() => {
        const fetchFormations = async () => {
            try {
                const response = await getAllFormations();
                console.log(response);  // Vérifiez la structure de la réponse
                // Si les données sont dans response.data, on les récupère ici
                setFormations(response.data || response); // On gère les données avec .data ou directement
            } catch (error) {
                console.error("Erreur lors de la récupération des formations:", error);
            }
        };
        fetchFormations();
    }, []);

    // Suppression d'une formation
    const handleDelete = async (id) => {
        try {
            await deleteFormation(id);
            setFormations(formations.filter(formation => formation.id !== id)); // On filtre pour enlever la formation supprimée
        } catch (error) {
            console.error("Erreur lors de la suppression de la formation:", error);
        }
    };

    return (
        <Box sx={{ padding: 2 }}>
            <Typography variant="h4" gutterBottom>
                Liste des Formations
            </Typography>
            {/* Vérification si formations contient des données */}
            <Grid container spacing={2}>
                {formations.length > 0 ? formations.map((formation) => (
                    <Grid item xs={12} sm={6} md={4} key={formation.id}>
                        <Card sx={{ maxWidth: 345, boxShadow: 3 }}>
                            <CardContent>
                                <Typography variant="h5" component="div">
                                    {formation.Titre}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {formation.Description}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" onClick={() => window.location.href = `/view/${formation.id}`}>
                                    Voir
                                </Button>
                                <Button size="small" onClick={() => window.location.href = `/edit/${formation.id}`}>
                                    Modifier
                                </Button>
                                <Button size="small" color="error" onClick={() => handleDelete(formation.id)}>
                                    Supprimer
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                )) : (
                    <Typography variant="body1" color="text.secondary">
                        Aucune formation disponible
                    </Typography>
                )}
            </Grid>
        </Box>
    );
};

export default ListFormation;
