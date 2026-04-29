import React, { useState , useEffect } from 'react'

function Api() {
       const [Products, setProducts] = useState([]);
    const [load, setLoad] = useState(true);


    const getProducts = async () => {

        try {

            let res = await fetch("https://api.escuelajs.co/api/v1/products");
            let data = await res.json();
            console.log(data);
            setProducts(data)


        }


        catch (err) {

            console.log("Error While Fetching The Record!", err);

        }

        finally {

            setLoad(false)
        }
    }


    useEffect(()=>{

        getProducts()
    },[])

    if(load) return <center><h2>Loading....</h2></center>
  return (
    <>
    <div className="conatiner ">

        <div style={{display : "grid" , gridTemplateColumns : "repeat(3, 1fr)"  , gap : "20px"}}>
        {Products.map((currValue , index)=>{

            return(
                <div style={{display :"15px" , width :"300px" , textAlign:"center" ,border: "2px solid grey" , margin : "20px 50px" , padding : "15px" , borderRadius : "3px" ,boxShadow : "3px 3px 4px red"}}>
                    <img style={{borderRadius :"10px" , boxShadow : "3px 3px 4px cyan"}} src={currValue.images[0]} height={"300px"} width={"200px"} alt="" />
                    <h2>{currValue.title}</h2>
                    <h2>{currValue.price}</h2>
                    <p>{currValue.description.substring(0,125)}</p>
                </div>
            )
        }
        
        )}
        



        </div>
    </div>
    </>
  )
}

export default Api