import React from 'react';
import { NavLink } from 'react-router-dom';
import "../App.css";

const Navbar = () => {
    return (
        <div className="sidebar">
            <NavLink to="/"  className="sidebar-item" activeclassname="active">
                <img src="https://res.cloudinary.com/dlervwdnb/image/upload/v1713851235/home_dzk9al.png" className='icon' alt='home'/>
                <span className="tooltip-text">Home</span>
            </NavLink>
            <NavLink to="/about" className="sidebar-item" activeclassname="active">
                <img src="https://res.cloudinary.com/dlervwdnb/image/upload/v1713852191/about_trtoy8.png" className='icon' alt='about'/>
                <span className="tooltip-text">About</span>
            </NavLink>
            <NavLink to="/education" className="sidebar-item" activeclassname="active">
                <img src="https://res.cloudinary.com/dlervwdnb/image/upload/v1713852113/education_wbnmh1.png" className='icon' alt='education'/>
                <span className="tooltip-text">Education</span>
            </NavLink>
            <NavLink to="/skills" className="sidebar-item" activeclassname="active">
                <img src="https://res.cloudinary.com/dlervwdnb/image/upload/v1713853503/logical-thinking_xfdyms.png" className='icon' alt='skills'/>
                <span className="tooltip-text">Skills</span>
            </NavLink>
            <NavLink to="/certifications" className="sidebar-item" activeclassname="active">
                <img src="https://res.cloudinary.com/dlervwdnb/image/upload/v1713853259/badge_lfaibx.png" className='icon' alt='certifications'/>
                <span className="tooltip-text">Certifications</span>
            </NavLink>
            <NavLink to="/projects" className="sidebar-item" activeclassname="active">
                <img src="https://res.cloudinary.com/dlervwdnb/image/upload/v1713852313/jsprojects_jvlhzv.png" className='icon' alt='projects'/>
                <span className="tooltip-text">Projects</span>
            </NavLink>
            <NavLink to="/contact" className="sidebar-item" activeclassname="active">
                <img src="https://res.cloudinary.com/dlervwdnb/image/upload/v1713852138/contact_wqdjob.png" className='icon' alt='contact'/>
                <span className="tooltip-text">Contact</span>
            </NavLink>
        </div>
    );
};

export default Navbar;
