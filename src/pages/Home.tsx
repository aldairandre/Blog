import { collection } from "firebase/firestore"
import { useEffect, useState } from "react"
import styled from "styled-components"
import RecipeReviewCard from "../components/Main/Card-mui"
import NavBar from "../components/NavBar"
import { db } from "../firebase/config"
import { searchPost } from "../services/firestore"

const Home = () => {
  const [allPost,setAllPost] = useState<object[]>([])
  const colRefPost = collection(db,'posts')
  useEffect(
    () => {
        searchPost(colRefPost,setAllPost)
    },[]
   )
    return (
      <>
        <NavBar/>
        <Center>
          {allPost &&(
            allPost.map(
              (post:any) => 
              <RecipeReviewCard
                title={post.title} 
                conteudo={post.conteudo} 
                key={post.id}
                id={post.id}
              />
            )
          )}
        </Center>
      </>
    )
}

const Center = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap:10px;
  margin-top: 20px;
`

export default Home 