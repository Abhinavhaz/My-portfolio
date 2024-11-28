import "./projects.css";
import PCard from "./projectCard";
import qkart from "../Assets/qkart.png";
import expense from "../Assets/expense.png";
import qtify from "../Assets/qtify.jpeg";

function Projects() {
  const projects = [
    {
      title: "Expense Tracker",
      description:
        "An application to track your expenses with charts and analytics using React and Recharts.",
      img: expense,
    },
    {
      title: "Qkart",
      description:
        "An e-commerce platform developed with React, focusing on cart management and product listings.",
      img: qkart,
    },
    {
      title: "Qtify ",
      description:
        "A Spotify-like platform with playlist management, using React and Tailwind CSS.",
      img: qtify,
    },
    {
      title: "Qtify ",
      description:
        "A Spotify-like platform with playlist management, using React and Tailwind CSS.",
      img: qtify,
    },
    {
      title: "Qtify ",
      description:
        "A Spotify-like platform with playlist management, using React and Tailwind CSS.",
      img: qtify,
    },
    {
      title: "Qtify ",
      description:
        "A Spotify-like platform with playlist management, using React and Tailwind CSS.",
      img: qtify,
    },
  ];

  return (
    <>
      <div className="project-container">
        <div className="project2" style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          gap: "20px",
          padding: "20px",
        }}>
          <h1>Projects</h1>

          <p style={{ textAlign: "left" }}>
            Lorem ipsum dolor, sit amet consectetur adipisicing
            elit.Repellendus, libero temporibus voluptatem accusamus unde
            <br />
            corporis fuga possimus cupiditate? Dicta, similique voluptatum.
            <br />
            Vitae esse similique soluta dolor delectus perspiciatis suscipit
            aperiam!
          </p>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              gap: "100px",
            }}
          >
            {projects.map((project, index) => (
              <PCard
                key={index}
                title={project.title}
                description={project.description}
                img={project.img}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
