import styled from "styled-components"

const Card = ({title,conteudo,id}:any) => {
    return(
        <Container key={id}>
            <h1>{title.toUpperCase()}</h1>
            <p>{conteudo}</p>
            {/* <p> </p>
            <p>Ou pelo menos até em 2022, sabe se la se vão outra coisa...</p> */}
            <div className="actions">
                <p>Editar</p>
                <p>Deletar</p>
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
        p:first-child{
            padding: 6px;
            background: #3cc112;
            color: #fff;
            border-radius: 6px;
        }
        p:last-child{
            color:red;
        }
    }
`

export default Card