// Sidebar.jsx
import React from 'react';
import { Drawer, List, ListItem, ListItemText, IconButton, Divider, Box } from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { Link } from 'react-router-dom';

const drawerWidth = 240;

const Sidebar = ({ open, handleDrawerClose }) => {
  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
        },
      }}
      variant="persistent"
      anchor="left"
      open={open}
    >
      <Box sx={{ display: 'flex', justifyContent: 'space-between', p: 2 }}>
        <Typography variant="h6">Sidebar</Typography>
        <IconButton onClick={handleDrawerClose}>
          <ChevronLeftIcon />
        </IconButton>
      </Box>
      <Divider />
      <List>
        <ListItem button>
          <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
            <ListItemText primary="Dashboard" />
          </Link>
        </ListItem>
        <ListItem button>
          <Link to="/profile" style={{ textDecoration: 'none', color: 'inherit' }}>
            <ListItemText primary="Profile" />
          </Link>
        </ListItem>
        <ListItem button>
          <Link to="/settings" style={{ textDecoration: 'none', color: 'inherit' }}>
            <ListItemText primary="Settings" />
          </Link>
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;
