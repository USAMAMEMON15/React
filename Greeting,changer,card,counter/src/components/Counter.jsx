import React, { useState } from "react";

function Counter(){
    let [count , setCount] = useState(5);
 const addval = () =>{
    setCount  (count+1)
 }
 const decval = () =>{
    setCount  (count-1)
 }


return(
    <>
    <h1>Counter app {count} </h1>
    <button onClick={addval}>Increase</button>
    {" "}
    <button onClick={decval}>Dicrease</button>
         

    </>
);
}

export default Counter;