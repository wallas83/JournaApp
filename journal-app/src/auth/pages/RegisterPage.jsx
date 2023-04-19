import {Link as RouterLink} from 'react-router-dom';
import { Google } from '@mui/icons-material'
import { Button, Grid, Link, TextField, Typography } from '@mui/material'
import React from 'react'
import { AuthLayout } from '../layout/AuthLayout';

export const RegisterPage = () => {
  return (
        <AuthLayout title='Crear cuenta'>
             <form>
          <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
              <TextField
                label="Nombre completo"
                placeholder="nombre completo"
                fullWidth
                type="text"
              />
            </Grid>
            <Grid item xs={12} sx={{ mt: 2 }}>
              <TextField
                label="Correo"
                placeholder="correo.goolg@mail.com"
                fullWidth
                type="email"
              />
            </Grid>
            <Grid item xs={12} sx={{ mt: 2 }}>
              <TextField
                type="password"
                label="password"
                placeholder="password"
                fullWidth
              />
            </Grid>
            <Grid container spacing={2} sx={{ mb: 2, mt: 1}} >
                <Grid item xs= { 12 } sm= { 12 }>
                      <Button variant="contained" fullWidth>
                        Login
                      </Button>
                </Grid>
            
            </Grid>
                <Grid container direction= "row" justifyContent="end">
                  <Typography sx= {{mr: 1}}> Ya tienes cuenta?</Typography>
                      <Link component={ RouterLink} color="inherit" to="/auth/login">
                       Ingresar
                      </Link>    
                </Grid>
          </Grid>
        </form>

        </AuthLayout>

       
  )
}
