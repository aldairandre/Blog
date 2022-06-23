import { useState } from "react"
import styled from "styled-components"
import { Form } from "../../../pages/SignUp"
import {   
            doc, 
            updateDoc
        } from 'firebase/firestore'
import { db } from "../../../firebase/config"

const Modal = ({editModalOn,setEditModalOn,dataToEdit}:any) => {
    const [formNewData,setFormNewData] = useState({...dataToEdit})

    const handleInputChange = (e:any)=> {
        const {name, value} = e.target
        setFormNewData({...formNewData,[name]:value})
        
    }

    const handleSubmit = (e:any) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        const dataForm = Object.fromEntries(formData)

        const docRef = doc(db,'posts',dataToEdit.id)
        updateDoc(docRef,dataForm)
        setEditModalOn(!editModalOn)
    }

    return(
        <>
            <Background>
                    <Container>
                        <EditForm onSubmit={handleSubmit} id="formEdit">
                            <div>
                                <label htmlFor="title">Titulo do Post</label>
                                <input 
                                    type="text" 
                                    name="title" 
                                    id="title" 
                                    placeholder="Titulo"
                                    value={formNewData.title}
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
                                    value={formNewData.conteudo}
                                    onChange={handleInputChange}
                                    required
                                />
                        </div>
                        <input type="submit" value="Editar" />
                    </EditForm>
                </Container>
                <Closer onClick={() => {setEditModalOn(!editModalOn)}}>
                    Close
                </Closer>
            </Background>
        </>
    )
}

const Background = styled.div`
        height:88vh;
        background-color: rgba(0,0,0,.7);
        display:flex;
        flex-direction: column;
        row-gap: 136px;
        position: absolute;
        width: 100%;
        top: 59px;
`

const Container = styled.div`
    
`

const EditForm = styled(Form)`
    margin:0 auto;
    border-bottom-left-radius: 36px;
    border-bottom-right-radius: 36px;
    input[type=submit]{
        margin-top: 10px;
        padding: 10px;
        width: 50%;
        background: #3cc112;
        border-radius: 23px;
        border: none;
        color: #fff;
    }
`

const Closer = styled.button`
    width: 40%;
    padding: 10px;
    background-color: red;
    border:none;
    border-radius: 5px; 
    color: #fff;
    margin: 0 auto;
`

export default Modal