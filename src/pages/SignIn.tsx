import { useState } from 'react'
import NavBar from '../components/NavBar'
import { authApp } from '../firebase/config'
import { signInWithEmailAndPassword } from 'firebase/auth'
import Sign from "../components/SignForm"

const LoginAdmin = () => {
    const [formLogin, setFormLogin] = useState({})

    const handleInputChange = (e: { target: { name: any; value: any } }) => {
        const {name, value} = e.target
        setFormLogin({...formLogin, [name]: value})
    }

    const handleSubmit = async (e:any) => {
        e.preventDefault();
        const formData = new FormData(e.target)
        const dataForm:any = Object.fromEntries(formData)
        const {email, password} = dataForm
        
        try{
            await signInWithEmailAndPassword(authApp,email,password).then((credUser)=>console.log(credUser)).catch((err)=>console.log('Erro'))
        }catch{
            console.log('Autenticação falhada');
        }
        document.querySelector('form')?.reset()
        
    }

    return (
        <>
            <NavBar/> 
            <Sign 
                handleInputChange={handleInputChange}
                handleSubmit={handleSubmit}
                typography="Sign In"
                buttonText="Sign In"
            /> 
        </>
    )
}

export default LoginAdmin 