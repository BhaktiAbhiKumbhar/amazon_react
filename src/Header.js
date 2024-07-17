import React from "react";
import "./css/header.css";
import {Link} from 'react-router-dom';
function Header(){
    return(
        <div>
        <div className="header1">
        <Link to="/">
            <img src="https://i0.wp.com/www.dafontfree.co/wp-content/uploads/2021/11/Amazon-Logo-Font-1-scaled.jpg?resize=2560%2C1578" alt="logo" className="logo"/>
        </Link>
            <div className="search">
                <input type="text" /><button>Search</button>
            </div>

            <div className="nav">
               <div className="navitem">
                   <span className="item1">Hello</span>
                   <span className="item2">Sign in</span>
               </div>
               <div className="navitem">
                   <span className="item1">returns</span>
                   <span className="item2">& Orders</span>
               </div>
               <Link to="/cart">
               <div className="cart">Cart</div>
               </Link>
            </div>

        </div>

        <div className="header2">
             <ul>
                <li>All</li>
                <li>Mobile</li>
                <Link to="/Cloths">
                <li>Cloths</li></Link>
                <li>Electronics</li>
                <li>Shoes</li>
                <li>Toys</li>
                <li>Kitchen</li>
             </ul>
        </div>
        </div>
    )
}

export default Header;