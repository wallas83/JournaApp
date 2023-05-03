import { collection, doc, setDoc } from "firebase/firestore/lite";
import { FirebaseBD } from "../../firebase/config";
import { addNewEmptyNote, isSavingNewNote, setActiveNote, setNotes, setSaving, updateNotes } from "./journalSlice";
import { loadNotes } from "../../journal/helpers/loadNotes";

export const startNewNote =() => {
    return async (dispatch, getState) => {
        dispatch(isSavingNewNote());
       const {uid} = getState().auth;

        const newNote ={
            title: '',
            body: '',
            date: new Date().getTime(),

        }

        const newDoc = doc(collection( FirebaseBD,`${uid}/journal/notes`));
        // const setDocResp = await setDoc( newDoc, newNote);
        await setDoc( newDoc, newNote);
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
    return async(dispatch, getState) => {
        
       const {uid} = getState().auth;
       if(! uid) throw new Error ('El uid del usuario no existe');
      const notes =  await loadNotes(uid);
      dispatch(setNotes(notes));

    }
}

export const startSaveNote = () => {
    return async (dispatch, getState) => {
        dispatch( setSaving())
        const {uid} = getState().auth;
        const {active: note} = getState().journal;
        const noteToFireStore = {...note};
        delete noteToFireStore.id;

        //console.log(noteToFireStore)
        
        const docRef = doc( FirebaseBD, `${uid}/journal/notes/${note.id}`);
        await setDoc( docRef, noteToFireStore, {merge: true})
        dispatch( updateNotes(note));
    }
}