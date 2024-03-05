import React, { useEffect, useRef, useState } from "react";

const Useref = () => {
  const [name, setName] = useState("");
  const count = useRef(0);
  const input =useRef()
  useEffect(() => {
    count.current = count.current + 1;
  });
 const handelClick=()=>{
    console.log(input.current)
    input.current.style.width="300px";
    input.current.focus();
 }
  return (
    <div>
      {/* <input type="text" onChange={(e) => setName(e.target.value)} />
      <h1> Name is: {name} </h1>
      <h2>render : {count.current}</h2> */}

      <input type="text" ref={input}/><br></br>
      <button onClick={handelClick}>Click here</button>
    </div>
  );
};

export default Useref;
