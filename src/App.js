import React from 'react';
import Bar from './components/Navbar';
import TeamProjects from './components/TeamProjects';
import MiniProjects from './components/MiniProjects';
import miniprojects from './miniprojects.json';
import Navbar from 'react-bootstrap/Navbar'

import './App.css';


function App() {
  return (
    <div className="App bg">
      <Bar />
      <div className="container">
        <div className="row ml-5 mb-3">
          {miniprojects.map(projects => {
            return (
              <MiniProjects
                key={projects.id}
                image={projects.image}
                title={projects.title}
                url={projects.url}
                technology={projects.technology}
              />
            )
          })}
        </div>
      </div>
          <TeamProjects />
    <Navbar id="nav" className="mt-3" sticky="bottom" bg="">
    <Navbar.Brand href="#home">
          Leonard Love
    </Navbar.Brand>
  </Navbar>
    </div>
  );
}

export default App;
