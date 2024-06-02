import React from 'react'
import ProjectItem from '../components/ProjectItem'
import ProjectList  from '../helpers/ProjectList';
import "../App.css";

const Projects = () => {
  return (
    <div className='project-container'>
        <h className='Project-sec-title'>My Personal Projects</h>
        <p className='Project-sec-title'> currently This Page is under working, plase ignore it</p>
        <div className='ProjectsList'>
            {ProjectList.map((project,key)=>{
                return (
                    <ProjectItem id={key} name={project.name} image={project.image}/>
                )
            }

            )}

        </div>
    </div>
  )
}

export default Projects