import { createUserWithEmailAndPassword, onAuthStateChanged, signOut, } from "firebase/auth";
import { authApp, } from "../firebase/config";

export interface user {
    email: string,
    password:string
}

export const crateUser = async (dataUser:user) => {
    const {email, password} = dataUser
    createUserWithEmailAndPassword(authApp,email,password).then(
        (userCredential)=>{
            const user = userCredential.user
        }
    ).catch(
        (error)=>{
            console.log(error.code)
            console.log(error.message)
        }
    )
}


export const logOut = () => {
    signOut(authApp)
}

onAuthStateChanged(authApp,(user)=>{
    if(user){
        console.log(user)
    }else{
        console.log('Sem usuario')
    }
})