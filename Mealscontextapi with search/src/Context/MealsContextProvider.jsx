import React, { Children, use, useEffect, useState } from 'react'
import MealsContext from './MealsContext';

function MealsContextProvider({children}) {
 let [meals , setMeals]= useState([]);
 let [search , setSearch]= useState([]);
 let [load , setLoad]=useState(true);


const getMeal =async(search="")=>{

    try{
        let response =await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
        let jsonData = await response.json();
        setMeals(jsonData.meals);
    }

    catch(err){
console.log("ERROR WHILE FETCHING");

    }
    finally{
        console.log("SUCCESSFULL");
        setLoad(false)
        
    }
}

useEffect(()=>{

    getMeal(search)
},[search])


return(
    <MealsContext.Provider value={{load,meals , setSearch}}>
{children}
    </MealsContext.Provider>
)


}



export default MealsContextProvider
