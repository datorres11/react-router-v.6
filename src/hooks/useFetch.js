import { useCallback } from "react"
import { useState,useEffect } from "react"

export const useFetch = (url)=>{
    const [data, setData]=useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const fetchData=useCallback( async()=>{
        setLoading(true)
        try{
            const res = await fetch(url)
            if(!res.ok) throw Error("Error al consumir el api")
            const data = await res.json()
            setData(data)
        }catch(error){
            console.log(error.message)
            setError(error.message)
            setData([])
        }finally{
            setLoading(false)
        }
        
      },[])

    useEffect(()=>{
        fetchData()
      },[])
    return{data,loading,error}
}