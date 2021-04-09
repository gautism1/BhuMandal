import React,{useState,useEffect,lazy} from 'react';

import '../style/buyer.css';
import Property from './Property'
const axios = require('axios');

function Buyer () {

    const [propertys, setProperty] = useState([]);
   
useEffect(() => {
    axios.get('http://localhost:5000/seller').then((res) => {
        setProperty(res.data);
         console.log(res.data,"aa gya kya")
        
    }).catch((err)=>
    {
        alert("Something went wrong ")
        console.log(err,"error found during fetching")
    })
},[]);

    return <>
   <div className="categories"> <p>All list of Land to be sold</p>
    </div> 

     <div className="products" >  
      {
      propertys && propertys.length>0 &&
        propertys.map((property, index)=>( 
         <div key={index}className="card-ui">
             <Property
             property={property}
             />
          </div>))
      }
    
    </div>
    </>
}
    
export default Buyer;