import React, { useEffect, useState } from 'react'

function Print({calculateTable}) {
    const [row,setRow]=useState([]);
    useEffect(()=>{
        console.log("print table")
        setRow(calculateTable())
    },[calculateTable])
  return  row.map((rows,index)=>{
    return<p key={index}>{rows}</p>
  })
}

export default Print
