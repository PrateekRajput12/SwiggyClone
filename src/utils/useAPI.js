import {useState,useEffect} from 'react'

const useAPI=(api)=>{

    const [data,setdata]=useState([])
    const fetchData = async (api)=>{
const info=await fetch(api)
const converted= await info.json()
setdata(converted)

    }
    useEffect(fetchData(),[])





  return [data]

}

export default useAPI;