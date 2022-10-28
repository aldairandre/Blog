import styled from "styled-components"
import NavBar from "../components/NavBar"
import noProfilePhoto from '../assets/image/no-photo.png'
import Card from "../components/Main/Card-mui"
import NewPost from "../components/Main/NewPost"
import { collection, CollectionReference, onSnapshot} from "firebase/firestore"
import { db } from "../firebase/config"
import { useEffect, useState } from "react"
import Modal from "../components/Main/Modal"

const DesborAdmin = () => {
    const colRefPost = collection(db,'posts')
    const [allPost,setAllPost] = useState<object[]>([])
    const [editModalOn,setEditModalOn] = useState<boolean>(false);
    const [dataToEdit,setDataToEdit] = useState<object>({
        title:'',
        conteudo: '',
        id: ''
    }) 
    
   useEffect(
    () => {
        const searchPost = async (colRef:CollectionReference) => {
            onSnapshot(colRef,(snapshot) => {
                const dataArray:object[] =[]
                snapshot.docs.map((doc)=>dataArray.push({...doc.data(),id:doc.id}))  
                setAllPost(dataArray)
            })
        }
        searchPost(colRefPost)
    },[]
   )
    return (
        <> 
            <NavBar/>
            <Title>Dasbord de Adminstração</Title>
            <div>
                <ContainerProfileInfo>
                    <ProfilePhoto  src={noProfilePhoto} alt="Foto Admin"></ProfilePhoto>
                    <ProfileName>Nome da Pessoa</ProfileName>
                    <div>
                        <p>Editar foto</p>
                        <p>Remover foto</p>
                    </div>
                </ContainerProfileInfo>
                <SubTitle>Adicionar um novo Post</SubTitle>
                <NewPost/>
                <SubTitle>Seus Posts</SubTitle>
                <ContainerCards>
                    {
                        allPost &&(
                            allPost.map(
                                (post:any) => 
                                    <Card 
                                        title={post.title} 
                                        conteudo={post.conteudo} 
                                        key={post.id}
                                        id={post.id}
                                        allPost={allPost}
                                        setAllPost={setAllPost}
                                        setEditModalOn={setEditModalOn}
                                        dataToEdit={dataToEdit}
                                        setDataToEdit={setDataToEdit}
                                    />
                                
                            )
                        )
                    }
                </ContainerCards>

                {
                    editModalOn &&(
                        <Modal 
                            setEditModalOn={setEditModalOn}
                            editModalOn={editModalOn}
                            dataToEdit={dataToEdit} 
                            colRefPost={colRefPost}
                        />
                    )
                }
               
            </div>
        </>
    )
}

const Title = styled.h1`
    text-align:center;
    padding-top: 50px;
    @media(max-width:768px){
        font-size: 18pt;
        padding: 15px 0;
        background:#f1f1f1;
    }
`

const SubTitle = styled(Title)`
    background: none;
`

const ContainerProfileInfo = styled.div`
    @media(max-width:768px){
        display:flex;
        flex-direction:column;
        align-items:center;
        padding: 15px 0;
        background:#f1f1f1;
        row-gap: 5px;
    }
`

const ProfilePhoto = styled.img`
    @media(max-width:768px){
        max-width: 100px;
        max-height: 100px;
        border-radius: 50%;
    }
`

const ProfileName = styled.p`
    @media(max-width:768px){
        font-size:15pt;
    }
`

const ContainerCards = styled.div`
    @media(max-width:768px){
        width: 90%;
        margin:0 auto;
        padding-top: 15px;
        display: flex;
        flex-direction: column;
        row-gap:20px;
    }
`
export default DesborAdmin 