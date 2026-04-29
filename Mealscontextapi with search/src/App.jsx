
import './App.css'
import Meals from './Components/Meals'
import Search from './Components/Search'
import MealsContextProvider from './Context/MealsContextProvider'

function App(){

  return(

    <MealsContextProvider>
      <Search/>
      <Meals/>
    </MealsContextProvider>
  )
}
export default App
