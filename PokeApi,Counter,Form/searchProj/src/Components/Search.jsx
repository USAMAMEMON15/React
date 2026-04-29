import React, { use, useState } from 'react'

import Data from './data';

function Search() {
    const [data, setData] = useState([]);
    const [store, setStore] = useState(Data);
    const handleSearch = () => {
        const filterData = Data.filter((curr)=>{

            return curr.name.toLocaleLowerCase().includes(data.toLocaleLowerCase()) ||
            curr.Brand.toLocaleLowerCase().includes(data.toLocaleLowerCase()) 
        })
        setStore(filterData)
    }
    return (
    <>
    
        <div style={style.container}>
            <input type="text"

                placeholder='Search Your Food Here'
                value={data}
                style={style.input}
                onChange={(e) => setData(e.target.value)}
                name="" id='' />
            <button style={style.SearchBtn} onClick={handleSearch}>Search</button>
            <button style={style.Clear} onClick={() => { 
                setData("") 
                setStore(Data) }}>Clear</button>

        </div>

        {store.map((curr,index)=>{

            return(
                <div className={style.card} key={index}>
                    <h2 style={{color: "yellow"}}>{curr.name}</h2>
                
                 <h3 style={{color: "Skyblue"}}>{curr.Brand}</h3>
                 <img style={style.image} src={curr.Image} alt="" />



                </div>
            )
        }
        
        
        )}

    </>
  )
}


const style ={
container :{

    width:"100%",
    textAlign:"center",
    fontSize :"Bold",
},

input:{

    width : "95%",
    margin : "20px",
    padding : "16px 10px",
    borderRadius : "10px"


},

SearchBtn :{

    padding : "10px 20px",
    fontWeght : "Bold",
    borderRadius : "6px",
    fontSize : "18px",
    backgroundColor : "#e32d36",
    color:  "#fff",
},

Clear :{

    padding :" 10px  20px",
    fontWeghtn :"Bold",
    borderRadius : "6px",
    fontSize : "18px",
    backgroundColor : "#0e383b",
    color : "#fff"
    
},

card :{
    border : "2px solid #fff",
    boxShadow : "3px 4px 5px #ccc",
    height : "500px",
    color : "white",
    padding : "10px"


}  ,

image :{

    height : "300px",
    width : "350px",
    boxShadow : "3px 4px 5px #5c0202"
}


    }


export default Search