import { collection, deleteDoc, doc, setDoc } from "firebase/firestore/lite";
import { FirebaseBD } from "../../firebase/config";
import { addNewEmptyNote, deleteNoteById, isSavingNewNote, setActiveNote, setNotes, setPhotosToActiveNote, setSaving, updateNotes } from "./journalSlice";
import { loadNotes } from "../../journal/helpers/loadNotes";
import { fileUpload } from "../../journal/helpers/fileUpload";

export const startNewNote = () => {
    return async (dispatch, getState) => {
        dispatch(isSavingNewNote());
        const { uid } = getState().auth;

        const newNote = {
            title: '',
            body: '',
            date: new Date().getTime(),

        }

        const newDoc = doc(collection(FirebaseBD, `${uid}/journal/notes`));
        // const setDocResp = await setDoc( newDoc, newNote);
        await setDoc(newDoc, newNote);
        newNote.id = newDoc.id;

        dispatch(addNewEmptyNote(newNote));

        dispatch(setActiveNote(newNote));



        // console.log({newDoc, setDocResp});
        //dispatch
        //dispatch(newNote)
        //disptrach(activarNote)
    }
}


export const startLoadingNotes = () => {
    return async (dispatch, getState) => {

        const { uid } = getState().auth;
        if (!uid) throw new Error('El uid del usuario no existe');
        const notes = await loadNotes(uid);
        dispatch(setNotes(notes));

    }
}

export const startSaveNote = () => {
    return async (dispatch, getState) => {
        dispatch(setSaving())
        const { uid } = getState().auth;
        const { active: note } = getState().journal;
        const noteToFireStore = { ...note };
        delete noteToFireStore.id;

        console.log(noteToFireStore)

        const docRef = doc(FirebaseBD, `${uid}/journal/notes/${note.id}`);
        await setDoc(docRef, noteToFireStore, { merge: true })

        dispatch(updateNotes(note));
    }
}

export const startUploadingFiles = (files = []) => {
    return async (dispatch) => {
        dispatch(setSaving());
        // await fileUpload( files[ 0]);
        const fileUploadPromises = [];
        for (const file of files) {
            fileUploadPromises.push(fileUpload(file));

        }
        const photosUrls = await Promise.all(fileUploadPromises);
        dispatch(setPhotosToActiveNote(photosUrls));
    }
}
 export const startDeletingNote = () => {
    return async(disatch, getState) => {
        const { uid} = getState().auth;
        const {active: note} = getState().journal;
        
        const  docRef = doc( FirebaseBD, `${ uid }/journal/notes/${note.id}`);
        // console.log(docRef);
        await deleteDoc( docRef );

        disatch(deleteNoteById(note.id))

        
    }   
}