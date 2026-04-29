import React, { useEffect, useState } from 'react'
import MovieContext from './MovieContext';

export default function MovieContextProvider({children}) {

    let [movie, setmovie] = useState([]);
    
    let [load, setLoad] = useState(true);

    const getmovie = async (search = "") => {

        try {
            let response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=9b053e3c20be9ccd6aed74ba470cead2${search}`);
            let jsonData = await response.json();
            setmovie(jsonData.results);
        }

        catch (err) {
            console.log("ERROR WHILE FETCHING");

        }
        finally {
            console.log("SUCCESSFULL");
            setLoad(false)

        }
    }

    useEffect(() => {

        getmovie()
    },[])

    return (
        <MovieContext.Provider value={{ movie, load}}>
            {children}
        </MovieContext.Provider>
    )
}
