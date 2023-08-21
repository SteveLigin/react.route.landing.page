import React from "react";
const Service =()=>{
    const imagePath = "https://i.pinimg.com/564x/b9/7a/da/b97adaa4eef2b17678ef284cc45ac0c5.jpg"
    return(
        <div className=" heading">
            <h1>Saddle & Spurs </h1>
        
            <div className="cls">
           
            <img src= {process.env.PUBLIC_URL  +  imagePath }alt=" s1" width="500px" />
          
            <h4>""Strap on your spurs and saddle up, partner. We've got trails to ride and stories to uncover out here in the Wild West."<button>Click here</button></h4>
                
            </div>
            
            </div>
    );
};
export default Service;