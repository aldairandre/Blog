import { addDoc, collection } from "firebase/firestore";
import { useState } from "react";
import { db } from "../../../firebase/config";
import { Form } from "../Modal/index"

const NewPost = () => {
    const [formNewPost,setFormNewPost] = useState({})
    const colRefPost = collection(db,'posts')

    const handleInputChange = (e: { target: { name: any; value: any } }) => {
        const {name, value} = e.target
        setFormNewPost({...formNewPost, [name]: value})
    }

    const handleSubmit = (e:any) =>{
        e.preventDefault()
        const formData = new FormData(e.target)
        const data = Object.fromEntries(formData)
        addDoc(colRefPost,data)
        document.querySelector('form')?.reset()
    }

    return(
        <Form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="title">Titulo do Post</label>
                <input 
                    type="text" 
                    name="title" 
                    id="title" 
                    placeholder="Titulo"
                    onChange={handleInputChange}
                    required
                />
            </div>
            <div>
                <label htmlFor="conteudo">Conteudo</label>
                <input 
                    type="tel" 
                    name="conteudo" 
                    id="conteudo" 
                    placeholder="Conteudo"
                    onChange={handleInputChange}
                    required
                />
            </div>
            <input type="submit" value="Postar" />
        </Form>      
    )
}

export default NewPost