
import { Box } from "@mui/material"
import "./banner.css"
import astro from "../Assets/two_astro-removebg-preview.png"
import astro2 from "../Assets/two_astro_right.png_-removebg-preview.png"
import bannerImg from "../Assets/banner-bg.png"

function Banner(){



    return(
        <div className="container">

        <div >
            <Box className="box"> Welcome to my portfolio</Box>

<h1>  Hi im Abhinav Hazarika<br/><span class="animated-text">I'm a Frontend Developer</span></h1>

<p >
    Welcome! I'm Abhinav Hazarika, and I'm passionate about creating intuitive and responsive user interfaces. With a focus on frontend development, I strive to bring visually appealing and user-friendly designs to life. My work involves using modern technologies like React, JavaScript, and CSS to build seamless and interactive web applications. 
    <br/><br/>
    I believe in the importance of attention to detail and providing users with an exceptional experience. From crafting well-organized code to ensuring smooth performance across devices, my goal is to make every interaction on the web feel intuitive and delightful.
    <br/><br/>
    I specialize in creating scalable and reusable components, and I enjoy tackling challenges to implement new features and functionalities. Whether it’s refining an existing interface or building something from scratch, I’m always eager to learn new technologies and improve my skills to deliver the best possible results.
    <br/><br/>
    Let’s connect and create something amazing together!
</p>

        </div>
        

        <img src={astro} alt="img" />
        <img src={astro2} alt="img" />


        </div>
    )

}
export default Banner