import React,{useState} from 'react'
import MapContainer from './MapContainer'
import '../style/seller.css';
const axios = require('axios');


function Sellers()
{
    
const [coordinates,setCoordiants]=useState({})
    const mapStyles = {
        width: '100%',
        height: '100%'
      };
    
   let  submit =function(e)
   {
    e.preventDefault();
    var elements = document.getElementById("dataform").elements;
    var obj ={};
    for(var i = 0 ; i < elements.length ; i++){
        var item = elements.item(i);
        obj[item.name] = item.value;
    }   
    
    axios.post("http://localhost:5000/seller",obj).then((data)=>
        {
           alert("kudos !! Product details have been successfully uploaded ");
        }
    ).catch((err)=>
    {
        console.log(err,"error found");
        alert("Something went wrong");
        document.getElementById("dataform").reset();
    }
    )
       
   }
    return (<>
       <p>Owner and Property Details</p>
            <span>All fields are compulsory</span>
            <form  onSubmit={submit} id="dataform">
<div className="complete-details">
        <div className="additem">  
               <input type="text" id="name" name="owner_name" placeholder ="Enter Owner Name"required ></input>
               <br></br>
 
               <input type="tel" id="phone" name="phone"   placeholder='Enter Contact number'></input>
                   <br></br>

                <input type="email" id="email" name="email" placeholder='Enter owner email'></input>
                   <br></br>

               <input type="number" id="price" name="price" placeholder ="Enter  Estimaed Price /sq ft" required></input>
               <br></br>
                
               <input type="text" id="desc" name="description"  placeholder ="Enter Description"required ></input>
               <br></br>
               <input type="text" id="desc" name="road_facing"  placeholder ="Whether road facing or not"required ></input>
               <br></br>

               <input type="text" id="Near_by_landmark" name="landmark"  placeholder ="Enter Nearby Landmark" required ></input>
               <br></br>
                
               <input type="text" id="unique_id" name="unique_id"  placeholder ="Enter Unique Id" required ></input>
               <br></br>

            
            
             <button type="submit" className="submit-form">Add Properties</button>
        </div>
        <div className="map-div">

                <div className="map">
                     <MapContainer
                        setCoordiants={setCoordiants}
                     />
                </div>
 
        </div>
</div>
        </form>

        </>
    )
}
export default Sellers;