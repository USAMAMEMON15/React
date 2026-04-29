import React, { useContext } from 'react'
import UserContext from '../Context/UserContext'

function Profile() {
  
  const{user} =useContext(UserContext);
  if(!user) return <h2>Please Login Karo!</h2>
  return(

      <>
  <div><h1>Welcome , {user.name}</h1>
  <h2>{user.password}</h2>
  </div>
  </>
    ) 
}

export default Profile