import React from 'react'
import bg from  "../assets/images/bg.jpg";
import { backpack } from 'fontawesome';
function Home() {
  return (
    <>
<div class="card bg-dark text-white">
  <img  src={bg} className=""  alt="..."/>
  <div class="card-img-overlay display-flex align-item-center">
    <h5 class="card-title fs-1 fw-bold">Go to Purchase</h5>
    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    <p class="card-text">Last updated 3 mins ago</p>
  </div>
</div>
    </>
  )
}

export default Home