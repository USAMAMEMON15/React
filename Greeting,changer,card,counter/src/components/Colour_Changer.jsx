import { useState } from "react";

function Changer ( ){
    const[color,setColor]=useState("teal")

    return (

       <>
       <div className="container" style={{

        height:"100vh",
        backgroundColor:color,
        padding:"15px",
        borderRadius:"10px",

       }}>
        <button onClick={()=>setColor("skyblue")} style={{backgroundColor:"skyblue",marginLeft:"15px",border:"2px solid white",padding:"5px 10px",borderRadius:"5px"}}>skyblue</button>

        <button onClick={()=>setColor("red")} style={{backgroundColor:"red",marginLeft:"15px",border:"2px solid white",padding:"5px 10px",borderRadius:"5px"}}>red</button>

        <button onClick={()=>setColor("blue")} style={{backgroundColor:"blue",marginLeft:"15px",border:"2px solid white",padding:"5px 10px",borderRadius:"5px"}}>blue</button>
        
        <button onClick={()=>setColor("green")} style={{backgroundColor:"green",marginLeft:"15px",border:"2px solid white",padding:"5px 10px",borderRadius:"5px"}}>green</button>

        <button onClick={()=>setColor("yellow")} style={{backgroundColor:"yellow",marginLeft:"15px",border:"2px solid white",padding:"5px 10px",borderRadius:"5px"}}>yellow</button>


       </div>
       </>

    )
}
export default Changer ;