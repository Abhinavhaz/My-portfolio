
// import './App.css';
// import Navbar from './components/Navbar/Navbar';
// import Banner from './components/MainBanner/banner';
// import Skills from './components/Skills/Skills';
// import Projects from './components/projects/projects';
// import { ContactForm } from './components/Contact/contact';
// import Footer from './components/Footer/footer';
// import banner from "../src/components/Assets/banner-bg.png"

// function App() {
//   return (
//     <div className="App" style={{boxSizing:"border-box"}}>
//       <div  style={{ backgroundImage: `url(${banner})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>  
//       <Navbar />
//       <div id="banner">
//         <Banner />
//       </div>
//       <div id="skills">
//         <Skills />
//       </div>

//       </div>
//       <div id="projects">
//         <Projects />
//       </div>
//       <div id="contact">
//         <ContactForm />
//       </div>

//       <Footer />
//     </div>
//   );
// }

// export default App;

import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Banner from "./components/MainBanner/banner";
import Skills from "./components/Skills/Skills";
import Projects from "./components/projects/projects";
import { ContactForm } from "./components/Contact/contact";
import Footer from "./components/Footer/footer";
import banner from "../src/components/Assets/banner-bg.png";

function App() {
  return (
    <div
      className="App"
      style={{ scrollbarWidth: "none", 
        msOverflowStyle: "none",boxSizing:"border-box"}}
    >
      <img
        style={{
          background: "red",
          position: "fixed",
          height: "100vh",
          width: "100%",
          zIndex: "-1",
        }}
        src={banner}
        alt="banner"
      />  
      <div
        style={{
          // backgroundImage: url(${banner}),
          // backgroundSize: "cover",
          // backgroundRepeat: "no-repeat",
        }}
      >
        <Navbar />
        <div id="banner">
          <Banner />
        </div>
        <div id="skills">
          <Skills />
        </div>
      </div>

      <div id="projects">
        <Projects />
      </div>
      <div id="contact">
        <ContactForm />
      </div>
      <Footer />
    </div>
  );
}

export default App;