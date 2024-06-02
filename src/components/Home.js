import React from "react";
import heroImg from '../assets/Design uten navn.png';
import githubLight from '../assets/github-light.svg';
import linkedinLight from '../assets/linkedin-light.svg';
import {Link} from 'react-router-dom'
import "../App.css";


const Home=()=>{

    return (
        <section className="container">
          <div className="info">
            <h1 className="main-heading">
              Shashidher
              <br />
              Mylarapu
            </h1>
            <h2 className="designation">Frontend Developer</h2>
            <span>
              <a href="https://github.com/Shashidher-210" target="_blank" rel="noreferrer">
                <img src={githubLight} alt="Github icon" />
              </a>
              <a href="https://www.linkedin.com/in/mylarapu-shashidher-526621202/" target="_blank" rel="noreferrer">
                <img src={linkedinLight} alt="Linkedin icon" />
              </a>
            </span>
            <p className="description">
              With a passion for developing modern React web apps.
            </p>
            <div className="buttons">
            <a href="https://console.cloudinary.com/console/c-35b11b373a15a0a02aca2ae0d116e9/media_library/asset/0ea896fa456b8f105c2ca890488f671a/manage" download>
              <button className="hover">Resume</button>
            </a>
            <Link to="/Contact"><button type="button" className="btn">Connect</button></Link>

            </div>
            
          </div>
          <img
              src={heroImg}
              className="profileImage"
              alt=""
            />
        </section>
      );
}

export default Home;