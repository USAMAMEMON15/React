import React, { useState } from 'react'

function Api() {

  const [userName, setUserName] = useState();
  const [newUserName, setNewUserName] = useState();

  const [password, setPassword] = useState();
  const [newPassword, setNewPassword] = useState();

  const handleSubmit = () => {
    setNewUserName(userName)
    setNewPassword(password)
  }

  return (
    <>
      <div className="container">
        <h2>
          Contact Form name is : {newUserName}
          password is : {newPassword}
        </h2>

        <input
          type="text"
          name="name"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          placeholder="Enter Your Name"
          id=""
        />

        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter Your Password"
          id=""
        />

        <button onClick={handleSubmit}>Register</button>
      </div>
    </>
  )
}

export default Api