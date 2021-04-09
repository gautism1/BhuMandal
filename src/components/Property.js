import React, { useState, useEffect, useContext } from "react";
import '../style/property.css';
import { GlobalContext } from "../Global/GlobalState";
import MapContainer from './MapContainerbuyer.js'
 
function Property (props) {
 
        const {remove,productlist} =useContext(GlobalContext);
        const [map,setMap]=useState(false);
            let updateprice=props.updateprice

        function showmap()
        {  
           
        if(map)
          setMap(false)
          else setMap(true)
            
        }
    return (
    <div className="cart-div">
     
        <div className="cart-product">
          <div className="content">
      
             <div className="product-detail">
                   Ownher Name:      {props.property.owner_name}
             <div>
          </div>
        <div className="product-price">  
                    Price :  {props.property.price} /sq. ft.
        </div>    

        <p className="product-desc">   About :     
                         {props.property.description}  +It is   {props.property.road_facing}
        </p>
        <div className="product-reviews">  Phone No. 
                   {props.property.phone}
        </div>

         
      </div>       
   </div>       
<div className="pay">
        <div class="button-div">       
        <button className="cart-button-remove" onClick={showmap}> View Location    </button>
        </div>    
        <div className="maplist">
        { map && <div className="map-home">
         <MapContainer 

       coordinates=  {props.property.coordinates}
         />
      </div>
            }
             </div>
      
  </div>
</div>
       
    </div>
    )
}

export default Property;      