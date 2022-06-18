import styled from "styled-components"
import NavBar from "../components/NavBar"
import profilePhoto from  '../assets/image/Aldair-Andre.png'
import Card from "../components/Main/card"
import NewPost from "../components/Main/NewPost"

const DesborAdmin = () => {
    return (
        <>
            <NavBar/>
            <Title>Dasbord de Adminstração</Title>
            <div>
                <ContainerProfileInfo>
                    <img src={profilePhoto} alt="Foto Admin"/>
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
                    <Card/>
                    <Card/>
                    <Card/>
                </ContainerCards>
                
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