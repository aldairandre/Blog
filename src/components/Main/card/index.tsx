import { deleteDoc, doc, DocumentReference } from "firebase/firestore"
import styled from "styled-components"
import { db } from "../../../firebase/config"


const Card = ({title,conteudo,id,setEditModalOn,setDataToEdit}:any) => {
    
    return(
        <Container key={id} id={id}>
            <h1>{title.toUpperCase()}</h1>
            <p>{conteudo}</p>
            <div className="actions">
                <button
                    onClick={
                        () =>{
                            window.scrollTo(0,0)
                            setEditModalOn(true)
                            setDataToEdit({
                                title,
                                conteudo,
                                id
                            })
                        }
                    }
                >
                    Editar
                </button>
                <button onClick={
                    () => {
                        const docRef:DocumentReference = doc(db,'posts',id)
                        deleteDoc(docRef)
                    }
                }>Apagar</button>
            </div>
        </Container>
    )
}

const Container = styled.div`
    border: solid 1px #d1d1d1;
    border-radius: 5px;
    box-shadow: 0px 1px 9px rgb(0 0 0 / 20%);
    padding: 20px 0;
    h1 {
        text-align:center;
    }
    p{
        padding: 0 34px;
        text-align: justify;
    }
    .actions{
        margin-top: 10px;
        font-size:10pt;
        display:flex;
        justify-content: space-between;
        align-items:center;
        width:100%;
        padding: 0 34px;
        p{
            padding:0;
        }
        button:first-child{
            padding: 6px;
            background: #3cc112;
            color: #fff;
            border-radius: 6px;
            border:none;
        }
        button:last-child{
            color:red;
            border:none;
            background:none;
            text-decoration:underline;
        }
    }
`

export default Card