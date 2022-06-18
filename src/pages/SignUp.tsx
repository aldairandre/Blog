import styled from "styled-components"
import NavBar from "../components/NavBar"
import { useState } from "react"

const SignUp =  () => {
    const [formSignupDate, setFormSignupDate] = useState({})
   
    const handleSubmit = (e: any) =>{
        e.preventDefault()
        const formData = new FormData(e.target)
        const data = Object.fromEntries(formData)
        setFormSignupDate(data)
    }
    console.log(formSignupDate);
    return(
        <>
            <NavBar/>
            <Title>Sign Up</Title>
            <Form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Nome</label>
                    <input 
                        type="text" 
                        name="name" 
                        id="name" 
                        placeholder="Insira seu nome" 
                    />
                </div>
                <div>
                    <label htmlFor="lastName">Sobrenome</label>
                    <input 
                        type="text" 
                        name="lastName" 
                        id="lastName" 
                        placeholder="Insira seu sobrenome" 
                    />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
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
                <input type="submit" value="Sign Up" />
            </Form>
        </>
    )
}

export const Title = styled.h1`
    text-align:center;
    margin: 23px 0;
`

export const Form = styled.form`
    width: 90%;
    background: #f1f1f1;
    text-align: center;
    margin: 10px auto;
    padding: 10px 10px;
    div{
        margin: 10px 0;
        display: flex;
        flex-direction:column;
        align-items:flex-start;
        label{
            margin-bottom: 10px;
        }
        input{
            width:100%;
            padding:10px;
        }
    }
    input[type=submit]{
        margin-top: 10px;
        padding: 10px;
        width: 50%;
        background: #f83333;
        border-radius: 23px;
        border: none;
        color: #fff;
    }
`

export default SignUp