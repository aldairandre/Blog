import { Form } from "../../../pages/SignUp"

const NewPost = () => {
    return(
        <Form>
            <div>
                <label htmlFor="conteudo">Titulo do Post</label>
                <input 
                    type="text" 
                    name="titlepost" 
                    id="titlepost" 
                    placeholder="Titulo"
                />
            </div>
            <div>
                <label htmlFor="conteudo">Conteudo</label>
                <input 
                    type="tel" 
                    name="conteudo" 
                    id="conteudo" 
                    placeholder="Conteudo"
                />
            </div>
            <input type="submit" value="Postar" />
        </Form>      
    )
}

export default NewPost