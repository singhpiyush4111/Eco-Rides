// components/ProductCard.js
import React from 'react';
import { Card, CardContent, CardMedia, Typography, Box, Button, IconButton, Chip, List, ListItem } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import ShareIcon from '@mui/icons-material/Share';
import Image from 'next/image';
import logo from "../media/logo.png"
import product from "../media/product1.png"

const ProductCard = () => {
  return (
    <Box sx={{ p: 3 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1, }}>
        <Typography variant="h6" sx={{ fontSize: 18, fontWeight: 400, textTransform: 'uppercase' }}> Lorem Ipsum Doller </Typography>
        <a href="#"><Button size="small">View More</Button></a>
      </Box>




      {/*<Card sx={{ width: '20%', borderRadius: 3 }}>
        <Box sx={{ position: 'relative', height: 252, background: 'linear-gradient(135deg, #fa782e 8%, #c82930 83%)', borderRadius: '25px 25px 0 0' }}>
          <Image
            src={logo}
            alt="logo"
            width={75}
            height={75}
            layout="fixed"
            style={{ margin: 2, position: 'relative', top: 0, left: 10, objectFit: 'contain' }}
          />
          <Image
            src={product}
            alt="Shoe"
            width={350}
            height={350}
            layout="fixed"
            style={{ position: 'absolute', left: 10, top: '55%', transform: 'translateY(-50%)', zIndex: '9' }}
          />
          <Typography sx={{ position: 'absolute', bottom: 0, left: -7, fontSize: 125, fontWeight: 900, color: 'rgba(255, 255, 255, 0.1)' }}>ERB</Typography>
        </Box>
        <CardContent sx={{ padding: 2, backgroundColor: 'white', borderRadius: '0 0 25px 25px' }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
            <Typography variant="h6" sx={{ fontSize: 17, textTransform: 'uppercase' }}>Hartbee<b>spoort</b></Typography>
            <Chip label="Popular" background='#03353E' size="small" />
          </Box>
          <Typography variant="body2" sx={{ fontSize: 10, textTransform: 'uppercase' }}>Basket Ball Collection</Typography>
          <Box sx={{ mt: 2, display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Typography variant="subtitle2" sx={{ fontSize: 11, textTransform: 'uppercase', mb: 1, fontWeight: 600 }}>KM/h</Typography>
              <Typography variant="body2" sx={{ fontSize: 10, textTransform: 'uppercase' }}>200</Typography>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Typography variant="subtitle2" sx={{ fontSize: 11, textTransform: 'uppercase', mb: 1, fontWeight: 600 }}>Range</Typography>
              <Typography variant="body2" sx={{ fontSize: 10, textTransform: 'uppercase' }}>100km</Typography>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Typography variant="subtitle2" sx={{ fontSize: 11, textTransform: 'uppercase', mb: 1, fontWeight: 600 }}>Power</Typography>
              <Typography variant="body2" sx={{ fontSize: 10, textTransform: 'uppercase' }}>100W</Typography>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Typography variant="subtitle2" sx={{ fontSize: 11, textTransform: 'uppercase', mb: 1, fontWeight: 600 }}>Charging</Typography>
              <Typography variant="body2" sx={{ fontSize: 10, textTransform: 'uppercase' }}>100W</Typography>
            </Box>
          </Box>
          <Box sx={{ position: 'relative', top: 10, right: 0, background: '#11e95b', color: 'white', padding: '4px 12px', borderRadius: 1 }}>
            <Typography textAlign={'center'} variant="h6" sx={{ fontSize: 24 }}>₹<b>23,453</b></Typography>
          </Box>
        </CardContent>
  </Card>*/}



      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
        {Array(5)
          .fill(null)
          .map((_, i) => (
            <Card
              key={i}
              sx={{
                borderRadius: 3,
                boxShadow: 3,
                width: 250,
                padding: '15px',
              }}
            >
              <Box sx={{ position: 'relative', top: 0, left: 0, width: '100%', display: 'flex', justifyContent: 'space-between' }}>
                <Chip label="Popular" color="primary" size="small" sx={{ borderRadius: '5px' }} />
                <ShareIcon />
              </Box>
              <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 250 }}>
                <Image
                  src={product}
                  alt="scooty"
                  width={350}
                  height={350}
                  style={{ objectFit: 'contain' }}
                />
              </Box>

              <CardContent sx={{ p: 0 }}>
                <Typography variant="h6" component="div">
                  Lorem Ipsum {i + 1}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary">
                  123456 Lakh
                </Typography>
              </CardContent>
              <CardContent sx={{ p: 0, height: 25 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', p: 0 }}>
                  <Box sx={{ p: 0 }}>
                    <Typography variant="body1">80 km/h</Typography>
                    <Typography variant="body2" color="text.secondary">
                      Top Speed
                    </Typography>
                  </Box>
                  <Box sx={{ p: 0 }}>
                    <Typography variant="body1">80 km/h</Typography>
                    <Typography variant="body2" color="text.secondary">
                      Top Speed
                    </Typography>
                  </Box>
                  <Box sx={{ p: 0 }}>
                    <Typography variant="body1">80 km/h</Typography>
                    <Typography variant="body2" color="text.secondary">
                      Top Speed
                    </Typography>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          ))
        }
      </Box>
    </Box>

  );
};

export default ProductCard;


