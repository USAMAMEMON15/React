
import './App.css'
import Home from './Components/Home'
import MealsContextProvider from './Context/MealsContextProvider'

function App(){

  return (

    <MealsContextProvider>
      <Home/>
    </MealsContextProvider>
  )
}

export default App
