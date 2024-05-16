import React from 'react'
import './ResHeader.css'
import { Link } from 'react-router-dom'
function ResHeader() {
  return (
    <div className='headers'>
        <h2 className='maker'>Resume Maker App</h2>
        <Link to='/abc'><a href='/Resume'className='page'>AddResume</a></Link>
        <Link><a href="/" className='page'>Home</a></Link>
       
    </div>
  )
}

export default ResHeader