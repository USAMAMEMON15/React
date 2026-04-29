import React, { useState } from 'react';
import AllData from './Data';

function Category() {
  const [data, setData] = useState(AllData);
  const [inputVal, setInputVal] = useState();

  const select1 = (e) => {
    console.log(e.target.value);
    setInputVal(e.target.value);
  };
   // COND
 if (inputVal === "Product A to Z") {
   data.sort((a, b) => {
     let nameA = a.name;
     let nameB = b.name;
     if (nameA < nameB) {
       console.log(nameA);
       console.log(nameB);
       return -1;
     }
   });
 }

 if (inputVal === "Product Z to A") {
   data.sort((a, b) => {
     let nameA = a.name;
     let nameB = b.name;
     if (nameA > nameB) {
       console.log(nameA);
       console.log(nameB);
       return -1;
     }
   });
 }
 if(inputVal === "Price High to Low"){
    data.sort((a,b)=>{
        return b.price - a.price
    })
}

if(inputVal === "Price Low to High"){
    data.sort((a,b)=>{
        return a.price - b.price
    })
}

  return (
    <>
      <h1>Filter Products!</h1>
      <div className="container">
        <select name="" id="" onChange={select1}>
          <option value="Product A to Z">Product A to Z</option>
          <option value="Product Z to A">Product Z to A</option>
          <option value="Price High to Low">Price High to Low</option>
          <option value="Price Low to High">Price Low to High</option>
        </select>
      </div>

      <div className="products">
        {data.map((currValue, index) => {
          return (
            <div className="card" key={index}>
              <img
                src={currValue.image}
                height={"300px"}
                width={"500px"}
                alt=""
              />
              <h2>{currValue.name}</h2>
              <p
                style={{
                  color: "yellow",
                  fontSize: "24px",
                  margin: "20px",
                  fontWeight: "bold",
                }}
              >
                Price : {currValue.price}
              </p>
              <p
                style={{
                  color: "skyblue",
                  fontSize: "24px",
                  margin: "20px",
                  fontWeight: "bold",
                }}
              >
                {currValue.brand}
              </p>
              <p
                style={{
                  color: "gray",
                  fontSize: "24px",
                  margin: "20px",
                  fontWeight: "bold",
                }}
              >
                {currValue.description}
              </p>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Category;    