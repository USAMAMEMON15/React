import React, { useContext } from 'react'
import MovieContext from '../context/MovieContext';

export default function Movie() {

    let {movie ,load}= useContext(MovieContext);
    if(load) return <h2>LOADING....</h2>

  return (
    <>
    
  <div>
      {movie.map((results , index)=>{
     return(

        <>
        <img src={`https://image.tmdb.org/t/p/w500/${results.poster_path}`} alt="" />
        <h2>{results.original_title}</h2>
        </>
     )
    })}
  </div>
    </>
  )
}
