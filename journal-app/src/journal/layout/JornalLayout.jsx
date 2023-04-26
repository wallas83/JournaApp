import { Box, Toolbar } from '@mui/material'
import React from 'react'
import { NavBar, Sidebar } from '../components';

const drawerWidth = 240;
export const JornalLayout = ({children}) => {
  return (
    <Box sx={{display: 'flex'}} 
    className='animate__animated animate__fadeIn animate__faster'>
        <NavBar drawerWidth={ drawerWidth}/>
        <Sidebar drawerWidth={drawerWidth}/>
            {/* sidevar */}
            <Box 
                component='main'
                sx={{ flexGrow: 1 , p: 3}}
                >
                  <Toolbar/>
                    {children}
            </Box>
    </Box>
  )
}
