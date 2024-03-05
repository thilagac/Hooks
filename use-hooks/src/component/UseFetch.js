import React , { useEffect, useState }from 'react'

const UseFetch = (url) => {
    const[respone,SetRespone]=useState([])
    useEffect(()=>{
        fetch(url)
        .then((res)=>res.json())
        .then((data)=>SetRespone(data));
    },[])
  return respone;
}

export default UseFetch