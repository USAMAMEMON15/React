import React, { useContext, useState } from 'react'
import UserContext from '../Context/UserContext';

function Login() {
  
    const [name , setName] = useState();
    const [password , setPassword] =useState();

    const {setUser} =useContext(UserContext);

    const changeVal =(e)=>{
        e.preventDefault();
        setUser({name, password});

    }

    return(

        <>
        <div>
            <h2>ContactForm</h2>

            <input type="text" name='' value={name} placeholder='Enter Your Name' 
            onChange={(e)=> setName(e.target.value)}/>

            <input type="text" name='' value={password} placeholder='Enter Your Password' 
            onChange={(e)=> setPassword(e.target.value)}/>

            <button onClick={changeVal}>Submit</button>
        </div>
        </>
    )
}

export default Login