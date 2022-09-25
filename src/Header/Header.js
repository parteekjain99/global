// import React from 'react'
// import { Link } from 'react-router-dom'
// import "../Header/Header.css"
// import { Use_r_state } from '../Store/Store'
// const Header = () => {
//   const {x :{cart}} = Use_r_state();
//   return (
//     <>
//     <nav className="navbar navbar-expand-lg navbar-light bg-light">
//   <Link className="navbar-brand" to="/">Global</Link>
//   <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//     <span className="navbar-toggler-icon"></span>
//   </button>

//   <div className="collapse navbar-collapse" id="navbarSupportedContent">
//     <ul className="navbar-nav mr-auto">
//       <li className="nav-item active">
//         <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
//       </li>
      
      
     
//     </ul>
//    <Link to="/Cart"><i className="fa-sharp fa-solid fa-cart-shopping cart_icon" data={cart && cart.length}></i></Link> 
//   </div>
// </nav>
//     </>
//   )
// }

// export default Header

import React from "react";
import "../Header/Header.css"

const Navbar = ({ setShow, size }) => {
  return (
    <nav>
      <div className="nav_box">
        <span className="my_shop" onClick={() => setShow(true)}>
          My Shoping
        </span>
        <div className="cart" onClick={() => setShow(false)}>
          <span>
            <i className="fas fa-cart-plus"></i>
          </span>
          <span>{size}</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;