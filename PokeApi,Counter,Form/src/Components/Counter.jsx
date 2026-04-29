import React, { useEffect, useState } from 'react'

function Counter() {

  const [count, setCount] = useState(10);

  const addVal = () => {
    setCount(count + 1)
  }

  const decVal = () => {
    setCount(count - 1)
  }

  useEffect(() => {
    alert("Hello World")
    console.log("WOW")
  }, [])

  return (
    <>
      <h2>Counter App {count}</h2>
      <button onClick={addVal}>INC</button>
      <button onClick={decVal}>DEC</button>
    </>
  )
}

export default Counter