import { useState } from 'react'
import NavBar from '../components/NavBar'
import { Form, Title } from './SignUp'

const LoginAdmin = () => {
    const [formLogin, setFormLogin] = useState({})
    const handleSubmit = (e:any) => {
        e.preventDefault();
        const formData = new FormData(e.target)
        const dataForm = Object.fromEntries(formData)
        console.log(dataForm);
    }
    return (
        <>
            <NavBar/> 
            <Title>Login</Title>  
            <Form onSubmit={handleSubmit}>
               <div>
                    <label htmlFor="">Email</label>
                    <input 
                        type="email" 
                        name="email" 
                        id="email" 
                        placeholder="Insira seu email"
                    />
               </div>
               <div>
                   <label htmlFor="password">Password</label>
                    <input 
                        type="password" 
                        name="password" 
                        id="password" 
                        placeholder="Insira sua password"
                    />
               </div>
               <input type="submit" value="Login" />
            </Form>
        </>
    )
}

export default LoginAdmin 