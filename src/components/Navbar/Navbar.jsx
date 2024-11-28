import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa"; // Import social media icons
import "./Navbar.css";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleMenuToggle = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className="Nav">
            <div>Logo</div>

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
<a href="#contact">  
<div className="connect">Let’s Connect</div>

</a>
            </div>

            <button onClick={handleMenuToggle} className="menu-button">
                {menuOpen ? "✖" : "☰"}
            </button>

            {menuOpen && (
                <div className="menuOpen">
                    <a href="#banner">
                        <h5>Home</h5>
                    </a>
                    <a href="#skills">
                        <h5>Skills</h5>
                    </a>
                    <a href="#projects">
                        <h5>Projects</h5>
                    </a>
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
                    <div className="connect" style={{zIndex:"100"}}>Let’s Connect</div>
                </div>
            )}
        </nav>
    );
}

export default Navbar;
