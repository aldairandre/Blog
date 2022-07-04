import styled from "styled-components"
import NavBar from "../components/NavBar"
import { useState } from "react"
import { crateUser } from "../services/auth"
import Sign from "../components/SignForm"

const SignUp =  () => {
    const [formSignupDate, setFormSignupDate] = useState({})
    
    const handleInputChange = (e: { target: { name: any; value: any } }) => {
        const {name, value} = e.target
        setFormSignupDate({...formSignupDate, [name]: value})
    }

    const handleSubmit = (e:any) =>{
        e.preventDefault()
        const formData = new FormData(e.target)
        const data:any = Object.fromEntries(formData)
        crateUser(data)
        document.querySelector('form')?.reset()
    }

    return(
        <>
            <NavBar/>
            <Sign 
                handleInputChange={handleInputChange}
                handleSubmit={handleSubmit}
                buttonText="Sign Up"
            />
            {/* <Form onSubmit={handleSubmit}>
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
                <input type="submit" value="Sign Up" />
            </Form> */}
        </>
    )
}

export default SignUp