import { useState } from 'react'
import NavBar from '../components/NavBar'
import { authApp } from '../firebase/config'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { Form, Title } from './SignUp'

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
            <Title>Login</Title>  
            <Form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email">Email</label>
                    <input 
                        type="email" 
                        name="email" 
                        id="email" 
                        placeholder="Insira seu email" 
                        required
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                   <label htmlFor="password">Password</label>
                    <input 
                        type="password" 
                        name="password" 
                        id="password" 
                        placeholder="Insira sua password"
                        required
                        onChange={handleInputChange}
                    />
               </div>
               <input type="submit" value="Login" />
            </Form>
        </>
    )
}

export default LoginAdmin 