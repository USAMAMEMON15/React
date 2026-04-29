import { useState } from 'react'
import './App.css'
import MovieContextProvider from './context/MovieContextProvider'

import Movie from './components/Movie'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
   <MovieContextProvider>

    <Movie/>
   </MovieContextProvider>
   </>
  )
}

export default App
