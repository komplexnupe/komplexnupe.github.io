import React from 'react';
import './style.css'


const Footer = () => {

    return (
        <div className="footer">
        <h4>
            <a href="mailto:leonard.love87@icloud.com" hover><i class="fas fa-envelope-square" style={{ fontSize: 36 }}></i></a>
            <span> | </span>
            <a href="https://www.linkedin.com/in/leonardlove/" hover target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin" style={{ fontSize: 36 }}></i></a>
            <span> | </span>
            <a href="https://github.com/komplexnupe" target="_blank" rel="noopener noreferrer"><i class="fab fa-github-square" style={{ fontSize: 36 }}></i></a>
            </h4>
 </div>
)

}

export default Footer;