import React from "react";
import "./App.css";
const About =()=>{
    const imagePath = "https://i.pinimg.com/564x/70/20/6d/70206d796704ade894ca88c0c6aac23e.jpg"
    return(
        <div className=" heading">
            <h1 >About</h1>

            <div className="cls">
           
            <img src= {process.env.PUBLIC_URL  +  imagePath }alt=" s1" width="500px" />
          
            <h4>"In the heart of the untamed frontier, cowboys emerged as icons of resilience and adventure."<button>Click here</button><br/></h4>
                
            </div>
            
            </div>
    );
};
export default About;