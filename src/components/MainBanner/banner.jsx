
import { Box } from "@mui/material"
import "./banner.css"
import astro from "../Assets/two_astro-removebg-preview.png"
import astro2 from "../Assets/two_astro_right.png_-removebg-preview.png"

function Banner(){



    return(
        <div className="container">

        <div >
            <Box className="box"> Welcome to my portfolio</Box>

<h1>  Hi im Abhinav <br/><span class="animated-text">I'm a Frontend Developer</span></h1>

<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
    <br/>
  Repellendus, libero temporibus voluptatem accusamus unde 
  <br/>
corporis fuga possimus cupiditate? Dicta, similique voluptatum. 
<br/>
 Vitae esse similique soluta dolor delectus perspiciatis suscipit aperiam!</p>
        </div>
        

        <img src={astro} alt="img" />
        <img src={astro2} alt="img" />


        </div>
    )

}
export default Banner