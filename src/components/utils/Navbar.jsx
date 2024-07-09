// components/Navbar.js
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import logo from '../media/logo-white.png'
import Image from 'next/image';


const Navbar = () => {
  return (
    <AppBar position="static" style={{ backgroundColor: '#0A1F2D' }}>
      <Toolbar style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Box display="flex" alignItems="center">
          <Image src={logo} alt="Logo" style={{ width: '200px', height: 'auto' }} />
        </Box>
        <div style={{ width: '1px', height: '60px', backgroundColor: 'white', margin: '0 32px' }} />
        <Box
          sx={{
            flexGrow: 1,
            display: { xs: 'none', md: 'flex' },
            ml: '40px',
            gap: '40px',
          }}
        >
          <Button color="inherit" sx={{ textTransform: 'none', fontSize: '18px' }}>Meet the team</Button>
          <Button color="inherit" sx={{ textTransform: 'none', fontSize: '18px' }}>Discover your Ride</Button>
          <Button color="inherit" sx={{ textTransform: 'none', fontSize: '18px' }}>Media</Button>
          <Button color="inherit" sx={{ textTransform: 'none', fontSize: '18px' }}>Join the movement</Button>
          <Button color="inherit" sx={{ textTransform: 'none', fontSize: '18px' }}>Get in touch</Button>
        </Box>
        <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
          <IconButton edge="end" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
