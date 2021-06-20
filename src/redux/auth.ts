import { Auth } from '../models/Auth';

// Constantes
const dataInicial={
    authState:false,
    userData:{} 
};
// types
const LOGIN = 'LOGIN'

// reducer
export default function reducer(state = dataInicial, action:any){
    switch(action.type){
        case LOGIN:
            return {...state, authState: action.payload.authState}
        default:
            return state
    }
}

// actions
export const login = (data:Auth,auth:firebase.default.auth.Auth) => async (dispatch:any) => {
    const payload ={
        authState:false
    }
    try {
        const result= await auth.signInWithEmailAndPassword(data.email, data.password)
        payload.authState=true;
        // payload.userData=result.user;
    } catch (error) {
        console.log(error)
        payload.authState=false;
    }
    finally {
        dispatch({
            type: LOGIN,
            payload:payload
        })
    }
}