import { ProgressBar } from "react-bootstrap";
import { useState } from "react";
import "./skills.css";

import { CircularProgress, Box, Typography } from "@mui/material";
import { useMediaQuery } from "@mui/material";
import galaxyImg from "../Assets/galaxy.avif";

function Skills() {
    const isMediumScreen = useMediaQuery("(max-width: 1191px) and (min-width: 768px)");
    const tooSmall = useMediaQuery("(max-width: 430px)");

    const [page, setPage] = useState(1);

    const skills = [
        { name: "HTML", percentage: 80 },
        { name: "CSS", percentage: 70 },
        { name: "JavaScript", percentage: 85 },
        { name: "React", percentage: 90 },
        { name: "Bootstrap", percentage: 90 },
        { name: "NodeJs", percentage: 90 },
        { name: "ExpressJs", percentage: 90 },
        { name: "MongoDB", percentage: 90 },
    ];

    // Adjust items per page based on screen size
    const itemsPerPage = tooSmall ? 2 : 3; // Show 2 items if screen width is < 430px, else 3 items
    const totalPages = Math.ceil(skills.length / itemsPerPage);

    const previous = () => {
        if (page === 1) return;
        setPage((page) => page - 1);
    };

    const next = () => {
        if (page === totalPages) return;
        setPage((page) => page + 1);
    };

    return (
        <div
            className="skill-container"
            style={{
                backgroundImage: `url(${galaxyImg})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                width: "100vw",
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
                    <button
                        onClick={previous}
                        disabled={page === 1}
                        style={{
                            all: "unset",
                            fontSize: "1.9rem",
                            cursor: "pointer",
                        }}
                    >
                        ◀️
                    </button>

                    {skills
                        .slice((page - 1) * itemsPerPage, page * itemsPerPage)
                        .map((skill, index) => (
                            <div className="skill-item" key={index}>
                                <div className="circular-progress-wrapper">
                                    <CircularProgress
                                        variant="determinate"
                                        value={skill.percentage}
                                        size={isMediumScreen ? 70 : tooSmall ? 65 : 80}
                                        thickness={6}
                                        style={{ color: "white" }}
                                    />
                                    <div className="progress-text">{`${skill.percentage}%`}</div>
                                </div>
                                <p className="skill-name">{skill.name}</p>
                            </div>
                        ))}

                    <button
                        onClick={next}
                        disabled={page === totalPages}
                        style={{
                            all: "unset",
                            fontSize: "1.5rem",
                            cursor: "pointer",
                        }}
                    >
                        ▶️
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Skills;
