import { CollectionReference, onSnapshot } from "firebase/firestore"
import { Dispatch, SetStateAction } from "react"

export const searchPost = async (colRef:CollectionReference,setAllPost: Dispatch<SetStateAction<object[]>>) => {
    onSnapshot(colRef,(snapshot) => {
        const dataArray:object[] =[]
        snapshot.docs.map((doc)=>dataArray.push({...doc.data(),id:doc.id}))  
        setAllPost(dataArray)
    })
}