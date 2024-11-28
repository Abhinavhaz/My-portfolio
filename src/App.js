
// import './App.css';
// // import { Navbar } from 'react-bootstrap';
// import Navbar from './components/Navbar/Navbar';
// import Banner from './components/MainBanner/banner';
// import Skills from './components/Skills/Skills';
// import Projects from './components/projects/projects';
// import { ContactForm } from './components/Contact/contact';

// import Footer from './components/Footer/footer';

// // import PCard from './components/projects/projectCard';

// function App() {
//   return (
//     <div className="App">
    

//     <Navbar />
//     <Banner />
   
//      <Skills />
//       <Projects />
//       <ContactForm  />
      
//       <Footer />
//     </div>
//   );
// }

// export default App;
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Banner from './components/MainBanner/banner';
import Skills from './components/Skills/Skills';
import Projects from './components/projects/projects';
import { ContactForm } from './components/Contact/contact';
import Footer from './components/Footer/footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div id="banner">
        <Banner />
      </div>
      <div id="skills">
        <Skills />
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
