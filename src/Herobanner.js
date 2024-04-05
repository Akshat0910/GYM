import React from 'react'

import { Box, Stack, Typography } from '@mui/material';
import wallpaper from './pictures_and_logo/gymwallpaper.jpg'


export default function Herobanner() {
  return (

    <Box sx={{ mt: { lg: '212px', xs: '70px' }, ml: { sm: '50px' } }} position="relative" p="20px">
    <Typography color="#0829FA" fontWeight="600" fontSize="26px">Fitness Club</Typography>
    <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '40px' } }} mb="23px" mt="30px">
    The body achieves what<br></br> the mind believes.
    </Typography>
    <Typography fontSize="22px" fontFamily="Alegreya" lineHeight="35px">
      Check out the most effective exercises personalized to<br></br> you
    </Typography>
    <Stack>
      <a href="#exercises" style={{ marginTop: '45px', textDecoration: 'none', width: '200px', textAlign: 'center', background: '#0829FA', padding: '14px', fontSize: '22px', textTransform: 'none', color: 'white', borderRadius: '4px' }}>Explore Exercises</a>
    </Stack>
    <Typography fontWeight={600} color="#0829FA" sx={{ opacity: '0.1', display: { lg: 'block', xs: 'none' }, fontSize: '200px' }}>
      Exercise
    </Typography>
    <img src={wallpaper} alt="gym-wallpaper" 
    
    className='hero-banner-img' />
  </Box>
    

  )
}
