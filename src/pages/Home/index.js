import React from 'react';
import About from '../../components/AboutMe';
// import Nav from '../../components/Nav';
import Hero from '../../components/Hero';
import Projects from '../../components/Projects';
import './style.css'

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Projects />
    </div>
  );
}

export default Home;