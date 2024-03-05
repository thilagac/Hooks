import React, { useEffect, useState } from "react";
import UseEffect from "./component/UseEffect";
import Context from "./component/Context";
import Useref from "./component/Useref";
import UseReduce from "./component/UseReduce";
import UseLayoutEffect from "./component/UseLayout Effect";
import UseMemo from "./component/UseMemo";
import UseCallback from "./component/UseCallback";
import UseCustom from "./component/UseCustom";

const App = () => {
  const [count, setCount] = useState(0);
  // useEffect(() => {
  //   console.log("run useEffect", count);
  //   return () => {
  //     console.log("clean up", count);
  //   };
  // }, [count]);
  return (
    <div>
      {/* {count} Counter */}
      <div>
        <button onClick={() => setCount(count + 1)}>click</button>
      </div>
      {/* <UseEffect /> */}
      {/* <Context/> */}
      {/* <Useref /> */}
      {/* <UseReduce/> */}
      {/* <UseLayoutEffect/> */}
      {/* <UseMemo/> */}
      {/* <UseCallback/> */}
      <UseCustom/>
    </div>
  );
};
export default App;
