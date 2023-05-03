
import { Grid, Typography, Button, TextField } from '@mui/material';
import { SaveOutlined } from '@mui/icons-material'
import { ImageGallery } from '../components';
import { useForm} from "../../hooks/useForm";
import { useSelector, useDispatch} from "react-redux";
import { useMemo, useEffect} from 'react';
import { setActiveNote } from '../../store/journal/journalSlice';
import { startSaveNote } from '../../store/journal/thunks';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css'

export const NoteView = () => {
    const dispatch = useDispatch();
    const { active: note, savedMessage, isSaving } = useSelector(state => state.journal)
    const { body, title, date, onInputChange, formState } = useForm(note);
    const dateString = useMemo(() => {
        const newDate = new Date(date);
        return newDate.toUTCString();
    }, [date])

    useEffect(() => {
            dispatch(setActiveNote(formState))
    }, [formState])
    const onSaveNote =() => {
        dispatch(startSaveNote())
    }
    useEffect(() => {
        
            if(savedMessage.length > 28){
                console.log(savedMessage.length);
                Swal.fire('Nota actualizadad', savedMessage, 'success');
            }
        
    }, [savedMessage])
    
    return (
        <Grid container

            className='animate__animated animate__fadeIn animate__faster'
            direction='row'
            justifyContent='space-between'
            alignItems='center'
            sx={{ mb: 1 }}>
            <Grid>
                <Typography fontSize={39} fontWeight='light'>{dateString}</Typography>
            </Grid>
            <Grid>
                <Button 
                disabled = {isSaving}
                onClick={onSaveNote}
                color='primary' sx={{ padding: 2 }}>
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
                    name = 'title'
                    value={title}
                    onChange={onInputChange}
                />
                <TextField
                    type='text'
                    variant='filled'
                    fullWidth
                    placeholder='Que sucedio el dia de hoy?'
                    minRows={5}
                    name = 'body'
                    value={body}
                    onChange={onInputChange}

                />



            </Grid>
            <ImageGallery />
        </Grid>
    )

}
