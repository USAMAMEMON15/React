import React, { useContext } from 'react'
import MealsContext from '../Context/MealsContext'

function Meals() {

    let {meals ,load}= useContext(MealsContext);
    if(load) return <h2>LOADING....</h2>
  return (
    <>
    
  <div>
      {meals.map((meal , index)=>{
     return(

        <>
        <img src={meal.strMealThumb} alt="" />
        <h2>{meal.strMeal}</h2>
        </>
     )
    })}
  </div>
    </>
  )
}

export default Meals