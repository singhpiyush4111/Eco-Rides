// components/Hero.js
import React from 'react';
import Box from '@mui/material/Box';
import Search from '@mui/icons-material/Search';
import SearchIcon from '@mui/icons-material/Search';
import SearchInput from '@mui/material/Select/SelectInput';
import SearchButton from '@mui/material/Select/SelectInput';


const Hero = () => {
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
        <source src="/hero_bg.mp4" type="video/mp4" />
      </video>
      <Box
        sx={{
          width: '35%',
          position: 'absolute',
          left: '40%',
          top: '40%',
          transform: 'translate(-50%, -50%)',
          backgroundColor: '#f2f2f2',
          fontFamily: 'sans-serif',
        }}
      >
        <Search>
          <SearchInput placeholder="Search.." />
          <SearchButton type="submit" aria-label="search">
            <SearchIcon />
          </SearchButton>
        </Search>
      </Box>
    </Box>
  );
};

export default Hero;
