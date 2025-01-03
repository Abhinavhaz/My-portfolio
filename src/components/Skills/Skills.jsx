import { ProgressBar } from "react-bootstrap";
import { useState } from "react";
import "./skills.css";
import Slider from "react-slick"
import { CircularProgress, Box, Typography } from "@mui/material";
import { useMediaQuery } from "@mui/material";
import galaxyImg from "../Assets/galaxy.avif";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function Skills() {
    const isMediumScreen = useMediaQuery("(max-width: 1191px) and (min-width: 768px)");
    const tooSmall = useMediaQuery("(max-width: 430px)");

    const [page, setPage] = useState(1);

    const skills = [
        { name: "HTML", percentage: 80 },
        { name: "CSS", percentage: 70 },
        { name: "JavaScript", percentage: 85 },
        { name: "React", percentage: 90 },
       
    ];

    // Adjust items per page based on screen size
    // const itemsPerPage = tooSmall ? 2 : 3; // Show 2 items if screen width is < 430px, else 3 items
    // const totalPages = Math.ceil(skills.length / itemsPerPage);

    // const previous = () => {
    //     if (page === 1) return;
    //     setPage((page) => page - 1);
    // };

    // const next = () => {
    //     if (page === totalPages) return;
    //     setPage((page) => page + 1);
    // };



    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        // autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };
    return (
        <div
            className="skill-container"
            style={{
                // backgroundImage: `url(${galaxyImg})`,
                backgroundColor:"black",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                width: "100%",
                height: "540px",
                display: "flex",
                justifyContent: "center",
            }}
        >
            <div className="box2">
                <h1>Skills</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta voluptates
                    facilis eos magni enim sequi, error ex rerum possimus, quo totam cum asperiores
                    distinctio tempore aperiam, eum eaque facere eligendi?
                </p>

               
                  
                <div className="skill">
                    <Slider {...sliderSettings}>
                        {skills.map((skill, index) => (

                            <div key={index} className="skill-item">

                                <div className="circular-progress-wrapper">
                                    <CircularProgress
                                        variant="determinate"
                                        value={skill.percentage}
                                        size={isMediumScreen ? 70 : tooSmall ? 65 : 80}
                                        thickness={5}
                                        style={{ color: "#00CFFF" }}
                                    />

                                    <div className="progress-text">{`${skill.percentage}%`}</div>
                                <div className="skill-name">{skill.name}</div>

                                </div>

                            </div>
                        ))}

                        
                    </Slider>
                </div>
            </div>
            
        </div>
    );
}

export default Skills;
