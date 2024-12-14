import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { signup } from "../../services/Authservices";
import { Stack, Button, TextField, Typography, Box, Container, Divider } from "@mui/material";

const RegisterForm= () => {
    const navigate = useNavigate();

    const [nom, setNom] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password !== password2) {
            alert('Les mots de passe ne correspondent pas');
        } else {
            const userData = {
                nom: nom,
                email: email,
                password: password,
                password_confirmation: password2,
                role: 'Etudiant',
            };

            signup(userData).then((res) => {
                if (res) navigate('/login');
                else alert("Erreur lors de l'inscription");
            }).catch((err) => {
                alert("Erreur lors de l'inscription");
                console.log(err);
            });
        }
    };

    return (
        <Container maxWidth="sm">
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "100vh",
                    p: 3,
                    bgcolor: "background.paper",
                    borderRadius: 2,
                    boxShadow: 3,
                }}
            >
                <Typography variant="h4" align="center">Inscription</Typography>
                <Typography mt={1.5} variant="body2" align="center">
                    Créez votre compte pour commencer.
                </Typography>
                <br/>

                {/* <Divider sx={{ my: 4 }}>ou</Divider> */}

                <Stack
                    component="form"
                    onSubmit={handleSubmit}
                    direction="column"
                    gap={2}
                    sx={{
                        width: "100%",
                    }}
                >
                    <TextField
                        id="nom"
                        name="nom"
                        type="text"
                        value={nom}
                        onChange={(e) => setNom(e.target.value)}
                        variant="filled"
                        placeholder="Votre Nom"
                        fullWidth
                        required
                        sx={{ mb: 2 }}
                    />
                    <TextField
                        id="email"
                        name="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        variant="filled"
                        placeholder="Votre Email"
                        autoComplete="email"
                        fullWidth
                        required
                        sx={{ mb: 2 }}
                    />
                    <TextField
                        id="password"
                        name="password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        variant="filled"
                        placeholder="Votre Mot de passe"
                        fullWidth
                        required
                        sx={{ mb: 2 }}
                    />
                    <TextField
                        id="password2"
                        name="password2"
                        type="password"
                        value={password2}
                        onChange={(e) => setPassword2(e.target.value)}
                        variant="filled"
                        placeholder="Confirmez votre Mot de passe"
                        fullWidth
                        required
                        sx={{ mb: 2 }}
                    />

                    <Button type="submit" variant="contained" size="large" fullWidth>
                        S'inscrire
                    </Button>
                </Stack>

                <Typography
                    mt={5}
                    variant="body2"
                    color="text.secondary"
                    align="center"
                    letterSpacing={0.25}
                >
                    Vous avez déjà un compte ?{" "}
                    <Link to="/login">Connectez-vous</Link>
                </Typography>
            </Box>
        </Container>
    );
};

export default RegisterForm;
