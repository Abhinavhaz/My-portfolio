import React from "react";
import "./footer.css";
import footerimg from "../Assets/footer-bg.png"; // Import the image
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

function Footer() {
    return (
        <footer
            className="footer"
            style={{
                backgroundImage: `url(${footerimg})`,
                height:"100%", 
                backgroundSize: "cover", 
                // backgroundRepeat: "no-repeat", 
                backgroundPosition: "center", 
            }}
        >
            <div className="footer-content">
                <div className="footer-section">
                    <h3>About Me</h3>
                    <p>
                        <div style={{ textAlign: "left" }}>
                            Passionate about building user-friendly and responsive web applications.
                            Let’s create something amazing together!
                        </div>
                    </p>
                </div>
                <div className="footer-section">
                    <h3>Contact</h3>
                    <p>
                        Email: <a href="mailto:abhinavhazarika27@gmail.com">abhinavhazarika27@gmail.com</a>
                    </p>
                    <p>
                        Phone: <a href="tel:+918876839180">+91 8876839180</a>
                    </p>
                </div>
                <div className="footer-section">
                    <h3>Follow Me</h3>
                    <div className="social-icons">
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
