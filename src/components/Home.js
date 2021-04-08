import React, {useState,useEffect, useContext } from "react";
import {
    Link
  } from "react-router-dom";
import '../style/nav.css';
import { GlobalContext } from "../Global/GlobalState";

function Home()
{
  const {productlist} =useContext(GlobalContext);
    return (
        <div>
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