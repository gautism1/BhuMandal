import React, {useState,useEffect, useContext } from "react";
import {
    Link
  } from "react-router-dom";
import '../style/nav.css';
import { GlobalContext } from "../Global/GlobalState";

function Nav()
{
  const {productlist} =useContext(GlobalContext);
    return (
        <div>
        <div className="header">  
             <ul>
             <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/buyers">Buyers</Link>
          </li>
          <li>
            <Link to="/sellers">Sellers</Link>
          </li>
                {/* <button className="login">Login / Signin</button> */}

        </ul>
        
        <br>
        </br><br></br>
        <hr></hr>
       
  </div> 
  
</div>
    )
}

export  default  Nav;