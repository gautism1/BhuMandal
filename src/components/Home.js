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
      ******************************************************
      <h1>
       Believe it or now<br></br> 
       We build create
      </h1>
**************************************************
</div>
    )
}

export  default  Home;