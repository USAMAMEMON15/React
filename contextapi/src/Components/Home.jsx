import React, { useContext } from 'react'
import MealsContext from '../Context/MealsContext'

function Home() {

    let {meal , load} = useContext(MealsContext)
    if(load) return <h2>Loading....</h2>
  return (
    <>
    {meal.map((curr , index)=>{
        return(
            <>
            <img src={curr.strMealThumb} alt="" />
            <h2>{curr.strMeal}</h2>
            <h3>{curr.strCategory}</h3>
            </>
        )
    })}
    </>
  )
}

export default Home