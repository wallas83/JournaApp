import React from 'react'
import { Grid, Typography, Button, TextField } from '@mui/material';
import { SaveOutlined } from '@mui/icons-material'
import { ImageGallery } from '../components';

export const NoteView = () => {
    return (
        <Grid container

            className='animate__animated animate__fadeIn animate__faster'
            direction='row'
            justifyContent='space-between'
            alignItems='center'
            sx={{ mb: 1 }}>
            <Grid>
                <Typography fontSize={39} fontWeight='light'>19 de abril, 2023</Typography>
            </Grid>
            <Grid>
                <Button color='primary' sx={{ padding: 2 }}>
                    <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
                    Guardar
                </Button>
            </Grid>

            <Grid container>
                <TextField
                    type='text'
                    variant='filled'
                    fullWidth
                    placeholder='Ingrese el titulo'
                    label='Titulo'
                    sx={{ border: 'none', mb: 1 }}
                />
                <TextField
                    type='text'
                    variant='filled'
                    fullWidth
                    placeholder='Que sucedio el dia de hoy?'
                    minRows={5}

                />



            </Grid>
            <ImageGallery />
        </Grid>
    )

}
