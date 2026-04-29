import React, { useEffect, useState } from 'react'
import MealsContext from './MealsContext';

function MealsContextProvider({children}) {

    const [meal , setMeals]= useState([]);
    const [load , setLoad] = useState(true)

    useEffect(()=>{

        fetch ("https://www.themealdb.com/api/json/v1/1/search.php?s=")
        .then((res)=> res.json())
        .then((data)=>{
            setMeals(data.meals);
            setLoad(false)
        })
    },[])


    return (
        <MealsContext.Provider value={{meal , load}}>

            {children}
        </MealsContext.Provider>
    )
}
export default MealsContextProvider