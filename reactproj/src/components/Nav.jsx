import React from 'react'

function Nav() {
  return (
    <>
   <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand ms-2 fs-1 fw-bold" href="#">Store!</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">

      <ul class="navbar-nav mx-auto mb-2 mb-lg-0 fs-3">
        <li class="nav-item">
          <a class="nav-link " aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Products</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Services</a>
        </li>
      </ul>

      <button  className='btn btn-outline-light'>Registration
        <i className='fa fa-user-plus ms-1'></i>
      </button>
      <button className='btn btn-outline-light ms-2'>Login
        <i className='fa fa-sign-in ms-1'></i>
      </button>
      <button className='btn btn-outline-light ms-2'>Add to Cart
        <i className='fa fa-cart-plus ms-1'></i>
      </button>
    </div>
  </div>
</nav>
    </>
  )
}

export default Nav