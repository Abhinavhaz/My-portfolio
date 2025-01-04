import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa"; // Import social media icons
import "./Navbar.css";
import logo from "../Assets/logo2.png"

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleMenuToggle = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className="Nav">
            <div className="logo1"><img src={logo} alt="img" className="logo" /></div>

            <div className="Nav2">
                <a href="#banner">
                    <h4>Home</h4>
                </a>
                <a href="#skills">
                    <h4>Skills</h4>
                </a>
                <a href="#projects">
                    <h4>Projects</h4>
                </a>
                <div className="social-iconsNav">
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
                
<a href="#contact">  
<div className="connect">Let’s Connect</div>

</a>
            </div>

            <button onClick={handleMenuToggle} className="menu-button">
                {menuOpen ? '❌' : "☰"}
            </button>

            {menuOpen && (
                <div className="menuOpen">
                    <a href="#banner" style={{ textDecoration: "none" }}>
                        <h5>Home</h5>
                                                    </a>
                    <a href="#skills" style={{ textDecoration: "none" }}>
                        <h5>Skills</h5>
                    </a>
                    <a href="#projects" style={{ textDecoration: "none" }}>
                        <h5>Projects</h5>
                    </a>
                    <div className="social-iconsNav">
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
                    <a href="#contact" style={{ textDecoration: "none" }}>  
                    <div className="connect" style={{zIndex:"100"}}>Let’s Connect</div></a>

                </div>
            )}
        </nav>
    );
    
}

export default Navbar;
// noopener:

// Prevents the new tab (or window) from gaining access to the original tab (or window) through the window.opener property.
// Without noopener, the new page can potentially manipulate or redirect the original page using JavaScript. This is a security risk, especially if you're linking to external, untrusted websites.
// noopener ensures that the original page is not vulnerable to these attacks.
// noreferrer:

// Prevents the browser from sending the Referer header when navigating to the new page.
// This means the new page won't know the URL of the page where the link was clicked.
// It's mainly used to enhance privacy by not revealing the source of the traffic.