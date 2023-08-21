import React from "react"
import {Carousel} from "react-responsive-carousel";
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const CarouselSlider=()=>{
    return(
        <Carousel>
            <div >
            <img src="https://cdnb.artstation.com/p/assets/images/images/040/773/747/large/kuba-grzybowski-train-chase-x.jpg?1629837277" alt="slide 1" height="480px"></img>
                
                <p className="chairs">""Out here, under the open sky and endless stars, a cowboy's companions are his horse and the quiet rhythm of the prairie wind."

"</p>
              
            </div>
            <div >
            <img src="https://i.pinimg.com/originals/80/48/b6/8048b698f493f6a0808fc1ae8223e347.jpg" alt="slide 1"  height="480px"></img> 
                

                <p className="chairs">
"Riding the trails from dawn till dusk, facing the sun and storms alike, a cowboy knows that life's challenges are just like the changing weather."

"</p>
            </div>
            <div >
                <img src="https://i.pinimg.com/564x/ab/14/96/ab1496127d44779e6334dbc627c7d000.jpg" alt="slide 1" height="480px" ></img>
                <p className="chairs">"Gathered 'round the campfire, stories of past rides and lost trails intertwine with the crackling flames, weaving a tapestry of cowboy wisdom."</p>
            </div>
            <div>
                <img src="https://i.pinimg.com/564x/22/a5/60/22a56008a14b4a3885a406d93eae61a8.jpg" height="480px" alt="slide 4"></img>
                <p className="chairs">"In a world where the horizon stretches farther than the eye can see, a cowboy's heart is as vast as the land, forever bound to the freedom of the frontier."</p>
            </div>
        </Carousel>
    )
}
export default CarouselSlider;