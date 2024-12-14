// components/AuthForm.jsx
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { signin } from "../../services/Authservices"; // Assurez-vous que le chemin est correct
import { Stack, Button, Divider, InputAdornment, IconButton, TextField, Box, Container, Typography } from "@mui/material";

const AuthForm = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Effectuer l'appel API via le service 'signin'
    signin(user)
      .then((result) => {
        // Si la connexion est réussie
        if (result.data.token) {
          // Sauvegarder le token et l'utilisateur dans localStorage
          localStorage.setItem("CC_Token", result.data.token);
          localStorage.setItem("user", JSON.stringify(result.data.user));

          // Rediriger l'utilisateur vers une autre page (ex: /dashboard)
          navigate("/formations");
        } else {
          alert("Échec de connexion. Vérifiez vos informations.");
        }
      })
      .catch((error) => {
        console.error("Erreur de connexion :", error);
        alert("Erreur. Veuillez réessayer.");
      });
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
        <Typography variant="h4" align="center">Connexion</Typography>
        <Typography mt={1.5} variant="body2" align="center">
          Bienvenue ! Reconnectez-vous pour continuer.
        </Typography>

        <Divider sx={{ my: 4 }}>ou</Divider>

        <Stack
          component="form"
          onSubmit={handleSubmit}
          direction="column"
          gap={2}
          sx={{ width: "100%" }}
        >
          <TextField
            id="email"
            name="email"
            type="email"
            value={user.email}
            onChange={handleInputChange}
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
            type={showPassword ? "text" : "password"}
            value={user.password}
            onChange={handleInputChange}
            variant="filled"
            placeholder="Votre Mot de passe"
            autoComplete="current-password"
            fullWidth
            required
            sx={{ mb: 2 }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? "👁️" : "🙈"}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />

          <Button type="submit" variant="contained" size="large" fullWidth>
            Connexion
          </Button>
        </Stack>

        <Typography
          mt={5}
          variant="body2"
          color="text.secondary"
          align="center"
          letterSpacing={0.25}
        >
          Vous n'avez pas de compte ?{" "}
          <Link to="/register">Inscrivez-vous</Link>
        </Typography>
      </Box>
    </Container>
  );
};

export default AuthForm;
