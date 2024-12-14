// TopBar.jsx
import React from 'react';
import { AppBar, Toolbar, IconButton, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const TopBar = ({ handleDrawerOpen }) => {
  return (
    <AppBar position="sticky" sx={{ zIndex: 1201 }}> {/* Assurez-vous que la topbar soit au-dessus du sidebar */}
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerOpen}
          sx={{
            marginRight: 2,
            display: { sm: 'none' }, // Masquer sur des écrans larges
          }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap>
          My Application
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
