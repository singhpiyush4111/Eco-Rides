import React from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';

import toplogo from '../media/toplogo.png'
import Image from 'next/image';
import Topnavbar from '../../../stylesheets/Topnavbar.css'

const TopNavBar = () => {
  return (
    <>
      <Toolbar position="fixed" style={{ marginLeft: '70px', marginRight: '70px' }}>
        <Box sxx={{ display: 'flex', justifyContent: 'flex-start' }}>
          <IconButton edge="end" color="inherit">
            <Image src={toplogo} alt="Logo" width={45} height={45} />
          </IconButton>
        </Box>
        <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'flex-end' }}>
          <Box
            sx={{
              display: 'flex',
              backgroundColor: '#00cf5d',
              borderRadius: '20px',
              p: '0.6rem',
              gap: '0.3rem',
              fontSize: '15px',
              fontWeight: '600'
            }}
          >

            <a href="/signup" style={{ textDecoration: 'none', color: 'white' }}>
              Login

            </a>
            <span style={{ color: 'white' }}>/</span>
            <a href="/signup" style={{ textDecoration: 'none', color: 'white' }}>
              Sign Up
            </a>
          </Box>
        </Box>

      </Toolbar>

    </>
  );
}

export default TopNavBar
