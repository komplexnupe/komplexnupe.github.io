import React from 'react';
import Bar from './components/Navbar';
import TeamProjects from './components/TeamProjects';
import MiniProjects from './components/MiniProjects';
import Navbar from 'react-bootstrap/Navbar';
import About from './components/About';

import './App.css';


function App() {
  return (
    <div className="bcg">
      <Bar />
      <About />
      <div className="container container-sm">
        <div className="row ml-5 mb-3">
          <MiniProjects
            image={require('./images/burgertime.png')}
            title={"Burger Time"}
            url={"https://leonardlove-burger-time.herokuapp.com/"}
            technology={"Express.js, Handlebars.js, Heroku, MySQL, Node.js"}
          />
          <MiniProjects
            image={require('./images/Employee-Directory.gif')}
            title={"Employee Directory"}
            url={"https://komplexnupe.github.io/ll-employee-directory/"}
            technology={"React.js, JSX, Bootstrap, Node.js"}
          />
          <MiniProjects
            image={require('./images/burgertime.png')}
            title={"Weather Dashboard"}
            url={"https://komplexnupe.github.io/5-day-weather-dashboard/"}
            technology={"jQuery, Bootstrap, CSS, HTML5, Local Storage"}
          />
          <MiniProjects
            image={require('./images/Fitness-Tracker.gif')}
            title={"Fitness Tracker"}
            url={"https://fitness-workout-tracker-22.herokuapp.com/"}
            technology={"Mongo, Node.js, JavaScript, CSS, HTML5"}
          />
          <MiniProjects
            image={require('./images/employeeTracker.gif')}
            title={"Employee Dashboard"}
            url={"https://github.com/komplexnupe/employee-tracker"}
            technology={"Node.js, MySQL"}
          />
          <MiniProjects
            image={require('./images/noteTaker.gif')}
            title={"Note Taker"}
            url={"https://leonardlove-note-taker.herokuapp.com/"}
            technology={"Express.js, Handlebars.js, Heroku, MySQL, Node.js"}
          />
        </div>
      </div>
      <TeamProjects />
      <Navbar id="nav" className="mt-3" sticky="bottom" bg="">
        <Navbar.Brand className="text-white" href="#home">
          “All our dreams can come true, if we have the courage to pursue them.” – Walt Disney.
    </Navbar.Brand>
      </Navbar>
    </div>
  );
}

export default App;
