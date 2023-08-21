import React from "react";
const Contact =()=>{
 const imagePath = "https://i.pinimg.com/564x/9d/32/95/9d3295c072f30df974e6ff4485f62e4b.jpg"
    return(
        <div className=" heading">
            <h1>Frontier Trails</h1>
        
            <div className="cls">
           
            <img src= {process.env.PUBLIC_URL  +  imagePath }alt=" s1" width="500px" />
          
            <h4>
"Follow the frontier trails, where every dust cloud holds a tale and every sunrise brings a new adventure."<button>Click here</button></h4>
                
            </div>
            
            </div>
    );
};
export default Contact;
