// components/Navbar.jsx  
import React from 'react';
import { AppBar, Toolbar, Button, Typography, Container } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#2D3B48' }}> {/* Changer la couleur de fond de la Navbar */}
      <Toolbar>
        <Container sx={{ display: 'flex', justifyContent: 'space-between' }}>
          {/* Logo ou titre de l'application */}
          <Typography variant="h6" component="div" sx={{ color: '#FFFFFF' }}> {/* Changer la couleur du titre */}
            E-Learning
          </Typography>

          {/* Liens de navigation */}
          <div>
            <Link to="/login" style={{ textDecoration: 'none' }}>
              <Button sx={{ color: '#FFFFFF', '&:hover': { color: '#FF5722' } }}> {/* Couleur du bouton et survol */}
                Se connecter
              </Button>
            </Link>
            <Link to="/register" style={{ textDecoration: 'none' }}>
              <Button sx={{ color: '#FFFFFF', '&:hover': { color: '#FF5722' } }}> {/* Couleur du bouton et survol */}
                S'inscrire
              </Button>
            </Link>
          </div>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
