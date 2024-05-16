import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Login.css'
function Login() {
   const[state,setState]=useState({email:'',password:''})
   const email='raji08rajan@gmail.com'
   const password='sh@nil24'
   const change=(a)=>{
      setState({... state,[a.target.name]: a.target.value})
   }
   const update=()=>{
    if(email==state.email){
      if(password==state.password){
        alert("Login Successfully")
      }
      else{
        alert("Password Incorrect")
      }
    }
    else{
      alert("UserName Incorrect")
    }
   }
  
  return (
    <div className='cover'>
      <Container>
        <Row>
        <Col></Col>
        <Col>
          <div  className='middle'>
            <form onSubmit={update}>
              <h2 >LOGIN</h2>
              <input type='email' placeholder='Email' className='email' value={state.email} name='email' onChange={change}></input><br></br>
              <input type='password' placeholder='Password' value={state.password}  name='password' onChange={change}></input><br></br>
              <button className='btn btn-primary' >Login</button>
            </form>
          </div>
        </Col>
        <Col></Col>
      </Row>
    </Container>
    </div>
  )
}

export default Login