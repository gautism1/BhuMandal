import React, {useState,useEffect, useContext } from "react";
 
import '../style/nav.css';
import { GlobalContext } from "../Global/GlobalState";
import img from '../assest/1.jpeg'

function Home()
{
  const {productlist} =useContext(GlobalContext);
    return (
        <div  className="home"> 
       
      <h1>
     <br></br> 
       <br></br>
       <br>
       </br>
       <br></br>

      Get your dream come true with us
      </h1><br></br>
  $ Sell and buy $
</div>
    )
}

export  default  Home;