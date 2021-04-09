import React, {useState,useEffect, useContext } from "react";
import {
    Link
  } from "react-router-dom";
import '../style/nav.css';
import { GlobalContext } from "../Global/GlobalState";
import img from '../assest/1.jpeg'

function Home()
{
  const {productlist} =useContext(GlobalContext);
    return (
        <div  className="home"> 
      
 Home sweet home
 <h1>

     a BIG BANNER WILL come here and  

 </h1>
 <h3>
     ABout contact small smal components yaahn aaenge
     neeche aate jaenge ek k baad ek
 </h3>
</div>
    )
}

export  default  Home;