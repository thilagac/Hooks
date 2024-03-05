import React, { useEffect, useState } from 'react'
import UseFetch from './UseFetch'

const UseCustom = () => {
   const data =UseFetch('https://jsonplaceholder.typicode.com/users')
  return (
    <div>
        {data.map ((res)=>{
            return(
                <h4 key={res.id}>
                    {res.id}.{res.name}
                </h4>
            )
        })}
    </div>
  )
}

export default UseCustom