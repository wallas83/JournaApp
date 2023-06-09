import { loginWithEmailPassword, logoutFirebase, registerUserWithEmailPassword, signWithInGoogle } from "../../firebase/providers"
import { clearNotesLogout } from "../journal/journalSlice"
import { checkingCredentials, login, logout } from "./authSlice"

export const checkingAuthentication = (email, password) => {
    return  async ( dispath) => {
        dispath(checkingCredentials()) 
    }
}

export const startGoogleSigIn = () => {

    return async (dispatch) =>{
        dispatch( checkingCredentials());
        const result =  await signWithInGoogle();
        // console.log('dentro de el StartGoogleSigin')
        // console.log(result);
        if( !result.ok) return dispatch( logout(result.errorMessage));

        dispatch( login(result));
    }
}  


export const startCreatingUserWithEmailPassword = ({email, password, displayName}) => {
    return async (dispatch) => {
        dispatch(checkingCredentials);
      const {ok, uid, photoURL, errorMessage}= await registerUserWithEmailPassword({email, password, displayName});
        if(!ok) return dispatch( logout( {errorMessage}));
        dispatch( login({uid, displayName, email, photoURL}));
    }
}

export const startLoginWithEmailPassword = ({email, password}) => {
    return async (dispatch) => {
        dispatch(checkingCredentials);
        const {ok, uid, photoURL, displayName, errorMessage} = await loginWithEmailPassword({email, password});
        if(!ok) return dispatch(logout({errorMessage}));
        dispatch( login({uid, displayName, email, photoURL}));
    }

}

export const startLogout = () => {
    return async(dispatch) => {
       await logoutFirebase();
       dispatch(clearNotesLogout())
       dispatch(logout({}));
    }
}