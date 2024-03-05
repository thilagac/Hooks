import React, { useMemo, useState } from 'react'

function UseMemo() {
    const [number,setNumber]=useState(0)
    const [dark,setDark]=useState(false)
    const memoCalculation= useMemo(()=>{
       return expensiveFunction(number)
    },[number])
    // const calculation =expensiveFunction(number);
     const cssStyle={
        backgroundColor :dark?"black":"white",
        color:dark?"white":"black"
    }
   
  return (
    <div style={cssStyle}>
        <input onChange={(e)=>setNumber(e.target.valueAsNumber)}
        type ="number" value={number}/>
        <h2>calculation:{memoCalculation}</h2>
        <button onClick={()=>setDark(!dark)}>toggle</button>
    </div>
  )
};
function expensiveFunction(num){
    console.log("loop started")
    for (let i=0;i<1000000000; i++){}
    return num;
}

export default UseMemo