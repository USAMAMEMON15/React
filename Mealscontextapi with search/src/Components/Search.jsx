import React, { useContext, useState } from 'react'
import MealsContext from '../Context/MealsContext';

function Search() {
 
  let [input , setInput]= useState();
  let {setSearch}= useContext(MealsContext);
  const getSearch =(e) =>{
    e.preventDefault();
    setSearch(input)
  }

  return(
    <div>
        <input type="text" name='' onChange={(e)=>setInput(e.target.value)} />
        <button onClick={getSearch}>search</button>
    </div>
  )
}

export default Search