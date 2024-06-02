import React from 'react'
import "../App.css";
import { useNavigate } from 'react-router-dom';

const ProjectItem = ({id,name,image}) => {
const navigate=useNavigate()
  return (
    
    <div className='projectItem' onClick={()=>{
        navigate("/project/"+id)
    }}>
        <div style={{ backgroundImage: `url(${image})` }} className="bgImage">
         <h className="project-title"> {name} </h>
        </div>
    </div>
  )
}

export default ProjectItem
