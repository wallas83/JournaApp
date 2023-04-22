import { signWithInGoogle } from "../../firebase/providers"
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
        if( !result.ok) return dispatch( logout(result.errorMessage));

        dispatch( login(result));
    }
}  