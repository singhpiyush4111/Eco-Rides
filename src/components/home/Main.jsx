// components/Hero.js
import React from 'react';
import Box from '@mui/material/Box';



const Main = () => {
  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        paddingTop: '56.25%',
        overflow: 'hidden',
      }}
    >
      <video
        autoPlay
        loop
        muted
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100vh',
          objectFit: 'cover',
          objectPosition: 'center',
        }}
      >
        <source src="/Retrofitting.mp4" type="video/mp4" />
      </video>

    </Box>
  );
};

export default Main;
