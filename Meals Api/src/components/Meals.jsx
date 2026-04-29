import React, { useEffect, useState } from 'react'

function Meals() {
const [meal , setMeal] = useState([]);
const [loading , setLoading] = useState(true);

const getMeals = async() =>{
    try{
        let resp = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=");
        let jsonData = await resp.json();
        console.log(jsonData.meals)
        setMeal(jsonData.meals);
        
    }
    catch(e){
        console.log("Error");
        
    }
    finally{
        console.log("The Function has been resolved or rejected");
        setLoading(false)   
    }
}
useEffect(()=>{
    getMeals()
},[])
if(loading){
    return <h2>loading.....</h2>
}
return (
<>
<div className="container">
    {meal.map((currValue ,index)=>{
        return(

            <div>
                <img src={currValue.strMealThumb} alt="" />
                <h2>{currValue.strMeal}</h2>
                <h3>{currValue.strCategoty}</h3>
                <p>{currValue.strInstructions.substring(0,500)}</p>
            </div>
        )
    }
    )}

</div>
</>
  )
}

export default Meals;