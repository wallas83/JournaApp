import React from 'react';
import {Grid, Typography} from "@mui/material";

export const AuthLayout = ({children, title = ''}) => {
  return (
    <Grid
    container
    spacing={0}
    direction="column"
    alignItems="center"
    justifyContent="center"
    sx={{ minHeight: '100vh', backgroundColor: 'primary.main', padding: 4 }}
  >
    <Grid
      className='box-shadow'
      item xs={3}
      sx={{ width: {sm: 450, md: 550} , backgroundColor: 'white', padding: 3, borderRadius: 2 }}>
      <Typography variant='h5'> {title}</Typography>
      
      {children}
    </Grid>
    
    </Grid>
  )
}
