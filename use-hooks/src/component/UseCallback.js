import React,{useCallback, useState} from 'react'
import Print from './Print'

const UseCallback = () => {
    const [number,setNumber]=useState(1)
    const [dark,setDark]=useState(false);
    const calculateTable= useCallback ((value)=>{
        let newVal= number+ value;
        return [newVal*1,newVal*2,newVal*3,newVal*4,newVal*5]


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
< Print calculateTable={calculateTable}/>
    <button onClick={()=>setDark(!dark)}>toggle</button>
</div>
  )
}

export default UseCallback