import { useState } from 'react'
import NavBar from '../components/NavBar'
import { authApp } from '../firebase/config'
import { signInWithEmailAndPassword } from 'firebase/auth'
import Sign from "../components/SignForm"
import { validEmail } from '../utils/form'

const LoginAdmin = () => {
    const [formLogin, setFormLogin] = useState({
        email:'',
        password:''
    })
    const [erroEmail, setErrorEmail] =  useState(false)
    const [erroPass, setErrorPass] =  useState(false)
    const [disableOff, setDisableOff] = useState(true)

    const handleInputChange = (e: { target: { name: any; value: any } }) => {
        const {name, value} = e.target

        if(validEmail.test(value)){

            setFormLogin({...formLogin, [name]: value})
            console.log(`Email: ${formLogin.email}`)
        } 
        
    }

    const handleInputChange2 = (e: { target: { name: any; value: any } }) => {
        const {name, value} = e.target
     
        setFormLogin({...formLogin, [name]: value})
        console.log(formLogin)

        if(formLogin.password.length >= 0){
            setDisableOff(false)
            console.log(formLogin)          
        }else{
            setDisableOff(true)
        }
        
    }



    const handleSubmit = async (e:any) => {
        e.preventDefault();
        const formData = new FormData(e.target)
        const dataForm:any = Object.fromEntries(formData)
        const {email, password} = dataForm
        
        setErrorEmail(false)
        setErrorPass(false)

        if(!email || !password){
            if(!email){
                setErrorEmail(true)
            }else{
                setErrorPass(true)  
            }

        }else{
            setDisableOff(false)
            try{
                await signInWithEmailAndPassword(authApp,email,password).then((credUser)=>console.log(credUser)).catch((err)=>{
                    console.log('Verifique os seu dados de login se estão corretos')}
                )
            }catch{
                console.log('Autenticação falhada');
            }
            document.querySelector('form')?.reset()
        } 
        
        
    }

    return (
        <>
            <NavBar/> 
            <Sign 
                handleInputChange={handleInputChange}
                handleInputChange2={handleInputChange2}
                handleSubmit={handleSubmit}
                typography="Sign In"
                buttonText="Sign In"
                erroEmail={erroEmail}
                erroPass={erroPass}
                disableOff={disableOff}
                setDisableOff={setDisableOff}
                
            /> 
        </>
    )
}

export default LoginAdmin 