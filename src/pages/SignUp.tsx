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
                typography="Sign Up"
                buttonText="Sign Up"
            />
        </>
    )
}

export default SignUp