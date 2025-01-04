import "./projects.css";
import PCard from "./projectCard";
import qkart from "../Assets/qkart.png";
import expense from "../Assets/expense.png";
import qtify from "../Assets/qtify.jpeg";

function Projects() {
  const projects = [
    {
      title: "Expense Tracker",
     
        description: (
          <div>
            
            <p style={{ textAlign: "justify" }}>This web application allows users to track expenses, adding, editing, and deleting entries based on category and date, while providing a summary of their spending.</p>
            <li style={{ textAlign: "justify", marginBottom: "20px" }}>The application starts with a Wallet Balance set to 5000, which can be increased by the user. The wallet balance is updated accordingly whenever an expense is added.</li>
            <li style={{ textAlign: "justify", marginBottom: "20px" }}>Users cannot spend more than their available wallet balance; an alert is shown if they try to exceed it.</li>
            <li style={{ textAlign: "justify", marginBottom: "20px" }}>Users can add new expenses, providing details like title, amount, category, and date. Wallet balance updates automatically after each addition.</li>
            <li style={{ textAlign: "justify", marginBottom: "20px" }}>Users can edit or delete existing expenses.</li>
            <li style={{ textAlign: "justify", marginBottom: "20px" }}>A summary of total expenses is displayed, categorized by date or type, with a pie chart showing the breakdown.</li>
            <li style={{ textAlign: "justify", marginBottom: "20px" }}>A bar chart shows trending spends based on category.</li>
            <li style={{ textAlign: "justify", marginBottom: "20px" }}>All data, including wallet balance and expenses, is persisted in localStorage so it persists across page refreshes.</li>
            <li style={{ textAlign: "justify", marginBottom: "20px" }}>The application is responsive, ensuring it works well across different screen sizes.</li>
            <li style={{ textAlign: "justify", marginBottom: "20px" }}>Key technologies: React.JS, HTML, CSS, JavaScript, with third-party libraries like Recharts, React-Modal, Notistack, and React-Icons used for specific features.</li>
            </div>
        ),
        
      img: expense,
      vercelLink :"https://expense-peach-six.vercel.app/ " ,
      GithubLink : " https://github.com/Abhinavhaz/expense"  ,
      
    },
    {
      title: "Qkart",
      description:  (
        <div>
          <p style={{ textAlign: "justify" }}>QKart is an E-commerce application designed to offer a wide range of products for customers to browse and purchase.</p>
          <li  style={{textAlign:"justify" ,marginBottom:"20px" }}>In this project, I developed the backend system, including a comprehensive set of REST APIs adhering to best practices. I utilized MongoDB as the NoSQL database for efficient data storage and management.</li>
          <li  style={{textAlign:"justify" ,marginBottom:"20px" }}>The development process involved implementing robust authentication mechanisms with password hashing, token-based authentication using JWT, and incorporating data validation with JOI.</li>
          <li  style={{textAlign:"justify" ,marginBottom:"20px" }}>I followed a Test-Driven Development (TDD) approach, writing unit and integration tests using the Jest framework to ensure the reliability and accuracy of the implementation. Additionally, the backend was deployed on platforms like Heroku and MongoDB Atlas for seamless access and scalability.</li>
          <li  style={{textAlign:"justify" ,marginBottom:"20px" }}>Key technologies and skills: Express.js, Node.js, ES6, MongoDB queries, Mongoose ODM, Postman, Test-Driven Development, JWT token authentication, deployment on Heroku and Netlify.</li>
        </div>
      ),
            
      img: qkart,
      vercelLink :  " https://qkart-frontend-two-lake.vercel.app/",
      GithubLink :   "https://github.com/Abhinavhaz/abhinavhazarika27-ME_QKART_FRONTEND_V2",
      
    },
    {
      title: "Qtify ",
      description: (
        <div>
          <p style={{ textAlign: "justify" }}>QTify is a song-browsing application built from scratch using ReactJS paired with Material UI and Swiper to deliver a seamless and aesthetic user interface, offering songs from different albums and genres for music lovers.</p>
          <li style={{ textAlign: "justify", marginBottom: "20px" }}>In this project, I conducted a thorough analysis of the provided Figma design, successfully identifying and documenting required front-end components.</li>
          <li style={{ textAlign: "justify", marginBottom: "20px" }}>I created modular UI components including Cards, Carousels, and Buttons optimizing for reusability across various sections of the application.</li>
          <li style={{ textAlign: "justify", marginBottom: "20px" }}>I implemented an intuitive genre-based song filtering system using a tab component by modifying the one provided by MaterialUI, allowing users to browse songs by their preferred genre effortlessly.</li>
          <li style={{ textAlign: "justify", marginBottom: "20px" }}>I utilized REST APIs to fetch data served by the backend server.</li>
          <li style={{ textAlign: "justify", marginBottom: "20px" }}>Key technologies and skills: ReactJS, Module-scoped CSS, Flexbox, CSS variables, Condition Rendering, Component Reusability, Swiper Library, Material UI, Customizing Third-Party Components, API Integration, and Deployment on Vercel.</li>
        </div>
      ),
      
      img: qtify,
      vercelLink :  "https://qtify-2t51-git-main-abhinav-hazarikas-projects.vercel.app/"  ,
      GithubLink : " https://github.com/Abhinavhaz/Qtify ",
      
    },
    
  ];

  return (
    <>
      <div className="project-container">
        <div>
         
        </div>
        
        <div className="project2" style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          gap: "20px",
          padding: "20px",
         
        }}>
          <h1>Projects</h1>
<div style={{
width:"1000px"
           }}>  
          
          <p style={{ textAlign:"justify"}}>
          As a frontend developer, I am passionate about building intuitive and responsive web applications. 
          Each project I work on is an opportunity to learn and improve my skills, from creating beautiful user interfaces to integrating with back-end services. 

          <br/>
          <br/>

            These projects reflect my passion for building beautiful and functional web applications. 
            They cover a range of domains and functionalities, from e-commerce platforms to music streaming apps.
             I am committed to delivering high-quality work and paying attention to even the smallest details, ensuring that every project I complete is user-friendly, scalable, and visually appealing.
             <br/>
             <br/>
          
             Below, you can explore some of the projects I have worked on, which reflect my technical expertise, problem-solving skills, and dedication to continuous learning. Feel free to check out the live versions and the source code on GitHub. Let’s build something amazing together!
          </p>
</div>

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
                vercel={project.vercelLink}
                github={project.GithubLink}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
