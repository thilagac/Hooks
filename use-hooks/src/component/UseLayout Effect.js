import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'

const UseLayoutEffect = () => {
    const [toggle,setToggle]= useState(false);
const textRef =useRef()
    useLayoutEffect(()=>{
        if(textRef.current!=null){
            const dimension = textRef.current.getBoundingClientRect();
            textRef.current.style.paddingTop =`${dimension.height}px`
           console.log(dimension)
        }
      
    },[toggle])
    // useLayoutEffect(()=>{
    //     console.log("useLayoutEffect")
    // },[toggle])
  return (
    <div>
        <button onClick={()=>setToggle(!toggle)}>toggle</button>
        {toggle&&<h4 ref={textRef}>code bless you</h4>}
    </div>
  )
}

export default UseLayoutEffect