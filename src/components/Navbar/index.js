import React from "react";
import NavDropdown from 'react-bootstrap/NavDropdown';
import './style.css';

const Bar = () => {
    return(
      <nav className="navbar navbar-expand-lg mb-3">
        <a className="text-white navbar-brand ml-4" href="/">Leonard Love</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <a className="text-white nav-link" href="mailto:leonard.love87@icloud.com"><i className="fa fa-envelope-o"
                            aria-hidden="true" style={{fontSize: 24}}></i><span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                    <a className="text-white nav-link" href="https://www.linkedin.com/in/leonard-love-78085b18/"
                        target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin" style={{fontSize: 24}}></i>
                    </a>
                </li>
                <li className="nav-item">
                    <a className="text-white nav-link" href="https://github.com/komplexnupe" target="_blank" rel="noopener noreferrer"><i
                            className="fa fa-github" style={{fontSize: 24}}></i>
                    </a>
                </li>
                <NavDropdown title="App Projects" id="nav-dropdown">
        <NavDropdown.Item href="https://komplexnupe.github.io/cocktellme/"
        target="_blank" rel="noopener noreferrer">CockTellMe</NavDropdown.Item>
        <NavDropdown.Item href="https://github.com/komplexnupe/fitLink-LL"
        target="_blank" rel="noopener noreferrer">fitLink</NavDropdown.Item>

      </NavDropdown>
            </ul>
        </div>
    </nav>
    );
}

export default Bar;