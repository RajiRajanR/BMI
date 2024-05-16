import React, { useContext } from 'react'
import  { ResumeContext } from './Resume';

function Resumeapp() {
    const name=useContext(ResumeContext)
  return (
    <div>
        
        <li>{name}</li>

    </div>
  )
}

export default Resumeapp