import React,{useState,useEffect,lazy} from 'react';
import MapContainer from './MapContainer'
import '../style/buyer.css';
const axios = require('axios');




function Buyer () {

    const [products, setProduct] = useState([]);
    const [fakeproducts, setfakeProduct] = useState([]);
    
     useEffect(() => {
    axios.get('http://localhost:5000/shopList').then((res) => {
       
        setProduct(res.data);
        setfakeProduct(res.data);
    }).catch((err)=>
    {
        console.log(err,"error found during fetching")
    })
},[]);
 

function print(e)
{e.preventDefault();
    if(e.target.value !="all")
     { let obj = products.find(product =>product.category==e.target.value);
        setProduct(Object.entries(obj));  // obj is an object
        
     }
     if(e.target.value =="all")
     {
         
         setProduct(Object.entries(fakeproducts))
         console.log(fakeproducts)
     }
    }

    return <>
   <div className="categories"> <p>All list of Land to be sold</p>
     <input type="text" placeholder="Search for city"></input>
    </div> 

     <div className="products" >  
      {/* {
      products && products.length>0 &&
        products.map((product, index)=>(  <div key={index}className="card-ui">
        <Productdetails
         product={product}
         index={index}
         /></div>))
      } */}
      <div className="map-home">
      <MapContainer/>
      </div>
     
    </div>
    </>
}
    

export default Buyer;