import { Dispatch } from "react"

export const handleInputChange = (e:any,setFormNewData:Dispatch<any>,formNewData:any)=> {
    const {name, value} = e.target
    setFormNewData({...formNewData,[name]:value})
    
}