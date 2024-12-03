import { useEffect, useState } from "react";


//Para recibir data de un API
export const useFetch = (url)=> {
    const [data,setData] = useState(null);
    const [loading,setLoading] = useState(true);
    const [error,setError] = useState(null);

    useEffect(()=>{
        //Lo usan para cerrar una peticion
        const controller = new AbortController();
        setLoading(true)
        const fetchData = async()=>{
            console.log(`url es`,url)
            try {
                const response = await fetch(url,controller);
                if(!response.ok){
                    throw new Error("Error en la petición");                    
                }
                const jsonData = await response.json();
                setData(jsonData)
                setError(null)               
            } catch (error) {
                setError(error)
            } finally{
                setLoading(false)
            }
        }
        fetchData();
        return ()=>{
            controller.abort();
        }
    },[url])
    
    return {data,loading,error}
}