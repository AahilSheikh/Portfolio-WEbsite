import React from 'react'
import "./index.css"
import Home from "./routes/Home.jsx"
import About from "./routes/About.jsx"
import Project from "./routes/Project.jsx"
import Contact from "./routes/Contact.jsx"

import {Route,Routes} from "react-router-dom"


function App() {
  

  return (
    <>
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Project" element={<Project />} />
      <Route path="/About" element={<About />} />
      <Route path="/Contact" element={<Contact />} />
     </Routes>
    </>
    
  );
}

export default App
