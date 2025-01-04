import React from "react";
import "./footer.css";
import footerimg from "../Assets/footer-bg.png"; // Import the image
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { useMediaQuery } from "@mui/material";


function Footer() {
    // const isMediumScreen = useMediaQuery("(max-width: 1191px) and (min-width: 768px)");
    const tooSmall = useMediaQuery("(max-width: 856px)");
    return (
        <footer
            className="footer"
            style={{
                backgroundImage: `url(${footerimg})`,
                paddingTop:"10%",
                
                width:"auto",
                height:"100%", 
                backgroundSize: "cover", 
                backgroundRepeat: "no-repeat", 
                backgroundPosition: "center", 
            }}
        >
            <div className="footer-content">
                <div className="footer-section">
                    <h3>About Me</h3>
                    <p>
                        <div style={{textAlign:"center" , letterSpacing: "0.01em" }}>
                           
                            Passionate about building user-friendly and responsive web applications.
                             Let’s create something amazing together!
                              I am committed to continuous learning and adapting to new technologies.
                               Let's turn challenges into opportunities and create impactful digital experiences!
                        </div>
                    </p>
                </div>
                <div className="footer-section" >
                    <h3>Contact</h3>

                    <p >
                        Email: <a href="mailto:abhinavhazarika27@gmail.com">abhinavhazarika27@gmail.com</a>
                    </p>
                    <p>
                        Phone: <a href="tel:+918876839180">+91 8876839180</a>
                    </p>
                    
                </div>
                <div className="footer-section"  style={{ marginRight: tooSmall ? "30px": "-30px"}}>
                    <h3>Follow Me</h3>
                    <div className="social-iconsfooter">
                        <a href="https://github.com/Abhinavhaz" target="_blank" rel="noopener noreferrer">
                            <FaGithub />
                        </a>
                        <a href="http://www.linkedin.com/in/abhinavhazarika" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin />
                        </a>
                        <a href="https://www.instagram.com/abhinav_hazarikaa/" target="_blank" rel="noopener noreferrer">
                            <FaInstagram />
                        </a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>© 2024 Abhinav Hazarika. All Rights Reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
