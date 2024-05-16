import React, { createContext, useState } from 'react'
import './Resume.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import img from './images/dp.jpg'
import {  Link } from 'react-router-dom';
const ResumeContext=createContext();
function Resume() {
    
    const[data,setData]=useState({contact:"", email:"",address:"",year:"",degree:"",college:"",language:"",name:"",technology:"",experience:""})
    const change=(a)=>{
        setData({...data,[a.target.name]:a.target.value})
    }
    const update=(a)=>{
        a.preventDefault()
        console.log(data)
    }
  return (
    <div className='header'>
        <Container>
            <h2>Resume Builder Application</h2>
      <Row>
        <Col >
        <img src={img}></img>
        <h3>Contact</h3>
        <Form onSubmit={update}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Contact</Form.Label>
                <Form.Control type="number" placeholder="Contact" onChange={change} name='contact' required/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" onChange={change} name='email' required/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Example textarea</Form.Label>
                <Form.Control as="textarea" rows={3}  onChange={change} name='address' required/>
            </Form.Group>
        </Form>
        
        <h3>Language</h3>
        <Form onSubmit={update}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                
                <Form.Control type="text" onChange={change} name='language'required/>
            </Form.Group>
        </Form>
           
        </Col>
        <Col className='col-8'>
           
           <Form onSubmit={update}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter your Name" onChange={change} name='name'required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Technology</Form.Label>
                    <Form.Control type="text" onChange={change} name='technology' required />
                </Form.Group>
                <h3>Education</h3>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Passout Year</Form.Label>
                        <Form.Control type="number" placeholder="Year" onChange={change} name='year' required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Degree</Form.Label>
                        <Form.Control type="text" placeholder="Enter your Degree" onChange={change} name='degree'required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>School/College</Form.Label>
                        <Form.Control type="text" placeholder="Enter your School or College" onChange={change} name='college' required />
                    </Form.Group>
        
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Experience</Form.Label>
                    <Form.Control type="text" onChange={change} name='experience' required/>
                </Form.Group>
            </Form> 
        </Col>
      </Row>
      <Link to='/xyz'><button className='btn btn-primary'>Submit</button></Link>
        
        </Container>
        <div>
            <ResumeContext.Provider value={{data,setData}}>
               
            </ResumeContext.Provider>
        </div>
    </div>
  )
}
export {ResumeContext}
export default Resume