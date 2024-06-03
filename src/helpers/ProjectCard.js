import React from 'react';
import "../App.css";

function ProjectCard({ src, link, h3 }) {
  return (
    <a href={link} target="_blank" rel="noreferrer">
      <img className="hover" src={src} alt="" />
      <h3>{h3}</h3>
    </a>
  );
}

export default ProjectCard;

