import { createSlice } from '@reduxjs/toolkit';
export const journalSlice = createSlice({
    name: 'journal',
    initialState: {
        isSaving: false,
        savedMessage: '',
        notes: [],
        active: null
        // active:{
        //     id: 'ABC1234',
        //     title: '',
        //     body: '',
        //     date: 123441,
        //     imageUrls: [],//htttp://photo1,....

        // }
    },
    reducers: {
        isSavingNewNote: (state) => {
            state.isSaving = true
        },
        addNewEmptyNote: (state, action) => {
            state.notes.push( action.payload);
            state.isSaving = false;
        },

        setActiveNote: (state, action) => {
            state.active = action.payload;
        },
        setNotes: (state, action) => {

        },
        setSaving: (state, action) => {

        },
        updateNotes: (state, action) => {

        },
        deleteNoteById: (state, action) => {

        }

    }
});
export const { 
    addNewEmptyNote,
    setActiveNote,
    setNotes,
    setSaving,
    updateNotes,
    deleteNoteById,
    isSavingNewNote

} = journalSlice.actions;