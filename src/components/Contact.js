import "../App.css";
import { useState } from 'react'
import ReactCardFlip from 'react-card-flip'

const Contact = () => {
  
  const[isFlipped,setIsFlipped]=useState(false)
   
  function flipCard(){
    setIsFlipped(!isFlipped)
  }

  return (
    <div className="contactcard">
      <ReactCardFlip flipDirection='horizontal' isFlipped={isFlipped} >
        <div onClick={flipCard} className='front'>
          <h1>Hi I'm Shashidher</h1>
          <button className="contacttitle"> Contact</button>
        </div>

        <div onClick={flipCard} className='back'>
          <h1>Contact Details</h1>
          <div>
          <p>Phone : 7680084582</p>
          <p>Email : mylarapushashidher2@gmail.com</p>
          </div>    
        </div>
      </ReactCardFlip>
    </div>
    
    
  )

}

export default Contact