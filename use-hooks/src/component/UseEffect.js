import React, { useEffect, useState } from "react";

const UseEffect = () => {
  const [time, setTime] = useState(0);
  const [count, setCount] = useState(0);
  // useEffect(()=>{
  //     document.title =`${count} new message`
  // },[count])
  // useEffect(()=>{
  //    const timer= setInterval(()=>{
  //         setTime(time+1);

  //     },1000);
  //     return()=>{
  //          clearInterval(timer)
  //     }
  // });
  return (
    <div>
      <h3>{count} new message</h3>
      <h3>{time} in seconds</h3>
      <button onClick={() => setCount(count + 4)}>click</button>
    </div>
  );
};

export default UseEffect;
